[![Version](https://vsmarketplacebadge.apphb.com/version/metaseed.metago.svg)](https://marketplace.visualstudio.com/items?itemName=metaseed.metago)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/metaseed.metago.svg)](https://marketplace.visualstudio.com/items?itemName=metaseed.metago)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/metaseed.metago.svg)](https://marketplace.visualstudio.com/items?itemName=metaseed.metago)
[![Dependencies Status](https://david-dm.org/metaseed/metago/status.svg)](https://david-dm.org/metaseed/metago)
[![DevDependencies Status](https://david-dm.org/metaseed/metago/dev-status.svg)](https://david-dm.org/metaseed/metago?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/metaseed/metago/badge.svg)](https://snyk.io/test/github/metaseed/metago)

---

 **Attension: In V3 we changed Metajump command names and the command default trigger keys**

First of all, Metago is a tool made for myself, it comes from the voice in my heart💖as a programmer.    
Metago tries its best to be the coolest😎 keyboard(mouseless) focused navigation tool in vscode.    
Metago tries to make your keyboard⌨ to you as meaningful as a kitchen knife to a masterchef👩‍🍳.    

<br>
Metago as an free tool, currently is mentained and developed by me in my spare time🌙⏳, if you think it's useful to you or even indispensable like some of our users, please support me, just buy me a drink☕ would be a great inspiration for me, which means there is someone really like it. 😊

Give me a  [github⭐](https://github.com/metaseed/metago)
<table align="center" width="40%" border="0">
  <tr>
    <td>
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=P9GXHBAAHPBMN&item_name=metago+dev&currency_code=USD&source=url">
          <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"/>
      </a>
      <br>
    </td>
    <td>
	  <a href="https://github.com/metaseed/metaGo/blob/master/donate/index.md">
          <img src="./donate/scan.png" style="height: 66px;"/>
      </a>
    </td>
  </tr>
</table>
<br>
<br>

quotes from users:
> [Wicked fast cursor movement/selection for a focus on keyboard usage. This changed how I use VS Code forever. Seriously.](https://spectrum.chat/frontend/general/favourite-vs-code-extensions~9ad33139-aa3a-4f8e-a640-d08ba08736b0)

> [This boosts my performance so much since It’s a trouble for me to use VIM (I’m leftie :( )](https://medium.com/@ColCh/i-found-also-these-plugins-very-helpful-in-my-work-df795a9e929f)

> [ probably the best tool for keyboard driven navigation bar none (better than vim), includes bookmarks](https://dev.to/fbnlsr/10-essential-extensions-for-vscode-174i#comment-node-140785)

> [MetaGo is a way to move your cursor to a position quickly and without using your mouse/trackpad.](https://scotch.io/starters/visual-studio-code/metago)

> [Oh, man.. I have a feeling that after that I'm going to feel crippled without it. This is fantastic.](https://www.reddit.com/r/vscode/comments/6wcucw/mouseless_setup/#t1_dm8ka1b)

> and MORE from you... 

With this new V3 released, we are going to add more features, peek features in dev:
* hold <kbd>/</kbd> to hide jumper decorators on screen.(Done😉)
* jumper commands for all opened editors, not just the active editor.(Done!)
* support having fold regions.(V3.2 Done!)
* ripple jump support to show less decorators on screen. one target char for current paragraphy(seperated by empty lines), two target chars for current document editor, three or more for all open editors. 
* and more... at [changelog](https://github.com/metaseed/metaGo/blob/master/CHANGELOG.md)
* if you have andy suggestion just open an [issue on github](https://github.com/metaseed/metago/issues) or contact with us on [SLACK☕](https://metaseed-workspace.slack.com/archives/CTVFB7CLR)

## Features Summary
MetaGo provides fast cursor movement/selection for keyboard focused users:
* go to any character on screen with 3(most cases) or 4 times key press, support navigate to any visible editor tabs.
* using bookmarks to jump between files.
* moving cursor up/down between blank lines.
* select code block when moving cursor while hold shift key.
* scroll the active line (contains cursor) to the screen Top/Middle/Bottom.
* select line up/down.
* compatible with the vim plugins. 😊


> if you like this tool, and using Windows, you may also be interested in my other tool: [**metaTool**](https://github.com/metatool/metatool). (release soon) 😉    
> with metatool running with it's metakeyboard plugin, you just using the 61 keys main keyboard area to type any key you want.
>
> i.e. to jump next blank line in the document, currently the default trigger is <kbd>Alt</kbd>+<kbd>End</kbd>, now you could use<kbd>LAlt</kbd>+<kbd>;</kbd>, because <kbd>LAlt</kbd>+<kbd>;</kbd> is expanded to <kbd>Alt</kbd>+<kbd>end</kbd>

### Metajump: go to any character on screen
1. type <kbd>Alt</kbd>+<kbd>/</kbd> to tell I want to *go* somewhere. (Triger)
2. type the characters(stands for the target location) on screen, metaGo will show you some codes(candidate target locations) encoded with character. (you could hold the <kbd>/</kbd>(configurable) to hide the location decorators, release to show again)
3. you could continue type characters following the target location, or type the code decoration characters, then you will *go* to that location.

> at any time press <kbd>ESC</kbd> to cancel the command; <kbd>Backspace</kbd> to cancel last typed char in target-char-sequence. (<kbd>Backspace</kbd> trigers 'step cancel')    

> Ripple Support, Less Decorators On Screen: type location-chars to encode locations far from center(cursor location): 
> 1. one target char for current paragraph(seperated by empty lines);
> 1. two target chars for current doc;
> 1. three or more target chars for all opened editors;
> 1. for one and two target chars, one char decorators will pass through boundaries if possible(i.e. for one target char, no two chars decorators are needed for all candidates in the current paragraph)

* the <kbd>Alt</kbd>+<kbd>.</kbd> command will trigger the metaGo.gotoAfter command, the cursor will be placed after the target character;    
* the <kbd>Alt</kbd>+<kbd>,</kbd> command will trigger the metaGo.gotoBefore command, the cursor will be placed before the target character;
* the <kbd>Alt</kbd>+<kbd>/</kbd> command will trigger the metaGo.gotoSmart mommand which intelligently set cursor position after navigation:
    * if the target is at the begin of the word, the cursor will be set before target character, otherwise after it;
    * The 'word' is defined as a group of all alphanumeric or punctuation characters.

> Note: <kbd>Enter</kbd> is also usable as location charactor, it means the end of lines
> commands that only navagite in the active editor are also provided: metaGo.gotoAfterActive, metaGo.gotoBeforeActive, metaGo.gotoSmartActive, you could assign shortcuts by yourself.

### select to any character on screen from cursor
1. type <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>/</kbd> to tell I want to *select* to somewhere.
2. type the character(stands for location) on screen, metaGo will show you some codes encoded with character.
3. type the code characters, you will *select* to that location.
4. repeat 1-3 to adjust your current selection.
> at any time press <kbd>ESC</kbd> to cancel

![MetaGo.MetaJump](images/metago.jump.gif)

#### features highlight
* code characters are based on priority, the easier to type character has higher priority. i.e. 'k','j', and code characters are configurable, if you like.
* code character decorator is encoded with 1 or 2 characters, the code characters around cursor are easier to type.
* only encode characters on viewable screen area, so metaGo is faster.
* even though your cursor is out of your viewable screen, metaGo still works!
* work with vim plugin
* support having fold regions
* support all opened editors

### navigate between files using bookmarks

* <kbd>Alt</kbd>+ <kdb>\'</kbd> to set a bookmark at the cursor location.
* <kbd>Alt</kbd>+ <kdb>[</kbd> goto previous bookmark.
* <kbd>Alt</kbd>+ <kdb>]</kbd> goto next bookmark
* <kbd>Alt</kbd>+<kdb>\\</kbd> to list the bookmarks and show management menu.
    1. press <kdb>cc</kbd> and <kbd>enter</kbd> to clear all the bookmarks
    2. press <kdb>c</kbd> and <kbd>enter</kbd> to clear all the bookmarks in current document.
    3. press <kdb>n</kbd> and <kbd>enter</kbd> to go to the next bookmark.
    4. press <kdb>p</kbd> and <kbd>enter</kbd> to go to the previous bookmark.

![MetaGo.Center](images/metago.bookmark.gif)

### scroll line to the screen center/top
* <kbd>Alt</kbd>+<kbd>m</kbd> is the default shortcut to scroll current line to screen center.
* <kbd>Alt</kbd>+<kbd>t</kbd> is the default shortcut to scroll current line to screen top.
* <kbd>Alt</kbd>+<kbd>b</kbd> is the default shortcut to scroll current line to screen bottom.

![MetaGo.Center](images/metago.center.gif)

### moving cursor up/down between blank lines
* <kbd>Alt</kbd>+<kbd>Home</kbd>(default shortcut) to move cursor to the blank line above.
* <kbd>Alt</kbd>+<kbd>End</kbd>(default shortcut) to move cursor to the blank line below.
* <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>Home</kbd>(default shortcut) to select from the cursor to the blank line above.
* <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>End</kbd>(default shortcut) to select from the cursor to the blank line below.
![MetaGo.blankLine](images/metago.blankLine.gif)

### select line up/down
the defaul select line down command not works well, if you press `ctrl+l, shift+up` to select line up, it will not select the current line but start from the line above.
we create our own:
* <kbd>Ctrl</kbd>+<kbd>l</kbd> to select line up.
* <kbd>Ctrl</kbd>+<kbd>shift</kbd>+<kbd>l</kbd> to select line down.

### jump to bracket
* extend the default jumpToBracket command.
* <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>\\</kbd>: jump to the begin bracket that contains the cursor. Press the shortcut *again* jump to the end bracket.

> it's very easy to triger metago command: type `F1, xx...`. `xx` is a prefix for search metago commands

### Other resources that help you understand MetaGo

[Use MetaGo to Quickly Move Around Your Code in VS Code](https://scotch.io/starters/visual-studio-code/metago#toc-conclusion)

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Default Shortcut Settings

            {
				"command": "metaGo.input.cancel",
				"key": "escape",
				"when": "editorTextFocus && metaGoInput"
			},
			{
				"command": "metaGo.gotoBefore",
				"key": "alt+,",
				"when": "editorTextFocus",
				"description": "goto the character and set the cursor before the character"
			},
			{
				"command": "metaGo.gotoAfter",
				"key": "alt+.",
				"when": "editorTextFocus",
				"description": "goto the character and set the cursor after the character"
			},
			{
				"command": "metaGo.gotoSmart",
				"key": "alt+/",
				"when": "editorTextFocus",
				"description": "goto the character and set the cursor smartly"
			},
			{
				"command": "metaGo.selectBefore",
				"key": "alt+shift+,",
				"when": "editorTextFocus",
				"description": "select to the cursor position before the character"
			},
			{
				"command": "metaGo.selectAfter",
				"key": "alt+shift+.",
				"when": "editorTextFocus",
				"description": "select to the cursor position after the character"
			},
			{
				"command": "metaGo.selectSmart",
				"key": "alt+shift+/",
				"when": "editorTextFocus",
				"description": "select to the cursor position smartly"
			},
			{
				"command": "metaGo.selectLineUp",
				"key": "ctrl+shift+l",
				"mac": "cmd+shift+l",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.selectLineDown",
				"key": "ctrl+l",
				"mac": "cmd+l",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.scrollCurrentLineToMiddle",
				"key": "alt+m",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.scrollCurrentLineToBottom",
				"key": "alt+b",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.scrollCurrentLineToTop",
				"key": "alt+t",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.gotoEmptyLineUp",
				"key": "alt+home",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.selectEmptyLineUp",
				"key": "alt+shift+home",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.gotoEmptyLineDown",
				"key": "alt+end",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.selectEmptyLineDown",
				"key": "alt+shift+end",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.bookmark.toggle",
				"key": "alt+'",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.bookmark.view",
				"key": "alt+\\",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.bookmark.previous",
				"key": "alt+[",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.bookmark.next",
				"key": "alt+]",
				"when": "editorTextFocus"
			},
			{
				"command": "metaGo.jumpToBracket",
				"key": "ctrl+shift+\\",
				"when": "editorTextFocus"
			}

To configure the keybinding, add the following lines to *keybindings.json* (File -> Preferences -> Keyboard Shortcuts):
## extension Settings
to modify default press <kbd>ctrl</kbd>+<kbd>,</kbd>, and search metago...
# default settings:

			{
				"command": "metaGo.input.cancel",
				"title": "xx: metaJump cancel",
				"category": "metaGo.metaJump"
			},
			{
				"command": "metaGo.metaJump.backspace",
				"title": "xx: metaJump step-cancel",
				"category": "metaGo.metaJump"
			},
			{
				"command": "metaGo.gotoSmart",
				"title": "xx: metaGo.goto Smart",
				"category": "metaGo.metaJump"
			},
			{
				"command": "metaGo.gotoAfter",
				"title": "xx: metaGo.goto After"
			},
			{
				"command": "metaGo.gotoBefore",
				"title": "xx: metaGo.goto Before"
			},
			{
				"command": "metaGo.gotoSmartActive",
				"title": "xx: metaGo.Goto Smart only in Active editor"
			},
			{
				"command": "metaGo.gotoAfterActive",
				"title": "xx: metaGo.Goto After only in Active editor"
			},
			{
				"command": "metaGo.gotoBeforeActive",
				"title": "xx: metaGo.goto Before only in Active editor"
			},
			{
				"command": "metaGo.selectSmart",
				"title": "xx: metaGo.Select to the cursor position Smartly"
			},
			{
				"command": "metaGo.selectBefore",
				"title": "xx: metaGo.Select to position Before the charactor"
			},
			{
				"command": "metaGo.selectAfter",
				"title": "xx: metaGo.Select to position After the charactor"
			},
			{
				"command": "metaGo.selectLineUp",
				"title": "xx: metaGo.Select Line Up"
			},
			{
				"command": "metaGo.selectLineDown",
				"title": "xx: metaGo.Select Line Down"
			},
			{
				"command": "metaGo.scrollCurrentLineToMiddle",
				"title": "xx: metaGo.cscroll urrent Line Middle"
			},
			{
				"command": "metaGo.scrollCurrentLineToTop",
				"title": "xx: metaGo.scroll current Line Top"
			},
			{
				"command": "metaGo.scrollCurrentLineToBottom",
				"title": "xx: metaGo.scroll current Line Bottom"
			},
			{
				"command": "metaGo.gotoEmptyLineUp",
				"title": "xx: metaGo.select Empty Line Move Up"
			},
			{
				"command": "metaGo.selectEmptyLineUp",
				"title": "xx: metaGo.select Empty Line Up"
			},
			{
				"command": "metaGo.gotoEmptyLineDown",
				"title": "xx: metaGo.Goto Empty Line Down"
			},
			{
				"command": "metaGo.selectEmptyLineDown",
				"title": "xx: metaGo.Select Empty Line Down"
			},
			{
				"command": "metaGo.bookmark.toggle",
				"title": "xx: metaGo.Bookmark Toggle"
			},
			{
				"command": "metaGo.bookmark.view",
				"title": "xx: metaGo.Bookmark View"
			},
			{
				"command": "metaGo.bookmark.clear",
				"title": "xx: metaGo.Bookmark Clear"
			}
		
## Development
install vscode extension: TypeScript + Webpack Problem Matchers
open terminal:
	npm i
	F5
## Credits

### Contributers:

<a href="https://github.com/metaseed/metago/graphs/contributors">Thank you to all the people who have already contributed to MetaGo!🤞</a>