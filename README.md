# ssh-action

## ssh_mac_caputure.js  

### 概要
* Raspberry Piなどの他のデバイスからmacに対してSSHコマンドを実行します。

### 使い方
下記コマンドを実行することでファイル形式、保存先を指定した画面キャプチャ（現状、macが対象で全画面のみ）を保存することができます。  
* node ssh_mac_caputure.js

### コード説明
* const sshcmd = "ssh [接続するsshのエイリアス名]"  
本コマンドでは公開鍵認証を使用するため、必ずユーザ設定ファイル(~/.ssh/config)を作成してください。  
作成しない場合はパスワード認証が必要になります。  
参考:[ユーザ設定ファイル(~/.ssh/config)を作成](https://qiita.com/7rikaz_h785/items/2734649855610cfff1a7)

* const fileformat = "defaults write com.apple.screencapture type [ファイル形式]"  
ファイル形式を指定してください。(png,jpgなど)  

* const savefilepath ="defaults write com.apple.screencapture location [画像ファイルの保存先パス] "    
画像ファイルの保存先パスを指定してください。  

* const applescriptpath = "osascript [AppleScriptのパス] "  
AppleScriptのパスを指定してください。  

* const cmd = sshcmd + fileformat + "&& " + sshcmd + savefilepath + "&& " + sshcmd + applescriptpath  
sshコマンドでmacに接続し、osascriptコマンドを実行します。  

## AppleScript_Smaples
* AeppleScript形式とJavaScript形式のサンプルファイルです。  
参考:[スクリーショットを実行するAppleScriptをスクリプトエディタで作成](https://qiita.com/7rikaz_h785/items/584739d89ac7b7095761)
