'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Config } from "./config";
import { MetaJumper } from './metajumper';
import { CurrentLineScroller } from './current-line-scroller';
import { BlankLineJumper } from './blank-line-jumper';
import { SelectLines } from './select-lines';
import { BookmarkExt } from './bookmark';
import { BracketJumper } from './bracket-jumper';
import { LandingPage } from './landing-page';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const landingPage = new LandingPage(context);
    landingPage.showIfNeed();
    // console.log('Congratulations, your extension "metago" is now active!');
    let config = new Config();
    config.loadConfig();
    // Event to update active configuration items when changed without restarting vscode
    vscode.workspace.onDidChangeConfiguration(e => {
        config.loadConfig();
        metaJumper.updateConfig();
        
    });
    // let editorConfig =vscode.workspace.getConfiguration("editor")
    // let fontSize =editorConfig.inspect("fontSize")
    // let fontfamily =editorConfig.inspect("fontFamily")
    //let lineHight = editorConfig.inspect("lineHeight")

    let metaJumper = new MetaJumper(context, config);
    let centerEditor = new CurrentLineScroller(context);
    let spaceBlockJumper = new BlankLineJumper(context);
    let selectLineUp = new SelectLines(context);
    let bookmark = new BookmarkExt(context, config.bookmark);
    let bracketJumper = new BracketJumper(context);

}

// this method is called when your extension is deactivated
export function deactivate() {
}