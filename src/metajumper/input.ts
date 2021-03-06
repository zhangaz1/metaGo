import * as vscode from 'vscode';
import { Config } from '../config';
export const CANCEL_MSG = 'input canceled'
class InputModel {
    text: string;
    validateInput: (text: string) => string;
    resolve: (text: string) => void;
    reject: (reason: any) => void;
    useInputBox: boolean;
    inputBoxToken: vscode.CancellationTokenSource;
    autoCompleteAferOneInput = true;

    constructor() {
        this.text = "";
    }
}

export class Input {
    private subscriptions: vscode.Disposable[] = [];
    private inputModel = new InputModel();
    static instances: Input[] = [];
    private editor: vscode.TextEditor;
    _config: Config;

    constructor(config: Config) {
        this._config = config;
        this.registerTextEditorCommand('metaGo.input.cancel', this.cancel);
        Input.instances.push(this);
    }

    input = (editor: vscode.TextEditor, validateInput: (text: string) => string = v => v, placeHolder = 'type the character to goto'): Promise<string> => {
        this.editor = editor;
        this.setContext(true);
        this.inputModel.validateInput = validateInput;

        let firstTime = true;
        try {
            this.registerCommand('type', this.onType);
            this.inputModel.useInputBox = true;
        }
        catch (e) {
            this.inputModel.useInputBox = true;
            const ct = new vscode.CancellationTokenSource();
            this.inputModel.inputBoxToken = ct;
            vscode.window.showInputBox({
                placeHolder: placeHolder,
                prompt: 'metaGo ',
                validateInput: (s) => {
                    if(!s) return '';
                    this.onType({ text: s });
                    return null;
                }
            }, ct.token).then((s) => {
                if(s === undefined) //esc
                this.cancel(editor);
                else if(s === '') // enter
                this.onType({ text: '\n' });
            });
        }

        return new Promise<string>((resolve, reject) => {
            this.inputModel.resolve = resolve;
            this.inputModel.reject = reject;
            vscode.window.onDidChangeActiveTextEditor(() => {
                this.cancel(editor);
            });
        });
    }

    onKey(key: string, editor: vscode.TextEditor, validateInput: (text: string) => string = v => v, placeHolder = 'press a key',
        keyDown: (key: string) => void,
        keyUp: (key: string) => void,
        cancel: (reason: string) => void): Promise<string> {

        this.inputModel.autoCompleteAferOneInput = false;
        let jumpTimeoutId = null;
        let keyDownCalled = false;
        let initialDelay = this._config.decoration.hide.triggerKeyDownRepeatInitialDelay;
        let interval = this._config.decoration.hide.triggerKeyDownRepeatInterval;
        let firstTimeDowned = false;

        let resolve: (text: string) => void;
        let reject: (reason: any) => void;
        let downPromise = new Promise<string>((res, rej) => {
            resolve = res;
            reject = rej;
        })

        this.input(editor, validateInput, placeHolder);

        this.inputModel.reject = k => {
            reject(k);
        };                

        this.inputModel.resolve = k => {
            var last = k.charAt(k.length -1);
            if (last === key) {    
                if (jumpTimeoutId) clearTimeout(jumpTimeoutId);
                if (!keyDownCalled) { keyDownCalled = true; keyDown(k); }
                jumpTimeoutId = setTimeout(() => { keyDownCalled = false; jumpTimeoutId = null; firstTimeDowned = false; keyUp(k); }, firstTimeDowned?interval:initialDelay);
                if(!firstTimeDowned) firstTimeDowned = true;
            } else {
                if (jumpTimeoutId) clearTimeout(jumpTimeoutId);
                cancel(last);
                resolve(last);
                this.complete(editor);
            }
        };
        return downPromise;
    }

    private onType = (event: { text: string }) => {
        const editor = vscode.window.activeTextEditor;
        if (this.inputModel) {
            this.inputModel.text += event.text;
            this.inputModel.text = this.inputModel.validateInput(this.inputModel.text);
            this.inputModel.resolve(this.inputModel.text);
            if (this.inputModel.autoCompleteAferOneInput)
                this.complete(editor);
        }
        else
            vscode.commands.executeCommand('default:type', event);
    }

    private dispose = () => {
        this.inputModel.autoCompleteAferOneInput = true;

        this.subscriptions.forEach((d) => d.dispose());
        const i = Input.instances.indexOf(this);
        if (i > -1) Input.instances.splice(i, 1);

    }

    private registerTextEditorCommand = (commandId: string, run: (editor: vscode.TextEditor, edit: vscode.TextEditorEdit, ...args: any[]) => void): void => {
        this.subscriptions.push(vscode.commands.registerTextEditorCommand(commandId, run));
    }

    private registerCommand = (commandId: string, run: (...args: any[]) => void): void => {
        this.subscriptions.push(vscode.commands.registerCommand(commandId, run));
    }


    private complete = (editor: vscode.TextEditor) => {
        this.inputModel.inputBoxToken?.cancel();
        this.inputModel.inputBoxToken = null;
        this.dispose();
        this.setContext(false);
    }

    private setContext(value: boolean) {
        vscode.commands.executeCommand('setContext', "metaGoInput", value);
    }

    private cancel = (editor: vscode.TextEditor) => {
        this.inputModel.reject(CANCEL_MSG);
        this.dispose();
        this.setContext(false);
    }

    public cancelInput() {
        this.cancel(this.editor);
    }
}