const {exec} = require('child_process')

//要ユーザ設定ファイル作成(~/.ssh/config) 
const sshcmd = "ssh [接続するsshのエイリアス名]"
//ファイル形式
const fileformat = "defaults write com.apple.screencapture type [ファイル形式]"
//画像ファイルの保存先パス
const savefilepath ="defaults write com.apple.screencapture location [画像ファイルの保存先パス] "
//AppleScriptのパス
const applescriptpath = "osascript [AppleScriptのパス] "
//AppleScript実行（ファイル形式と保存先指定）
//const cmd = sshcmd + fileformat + "&& " + sshcmd + savefilepath + "&& " + sshcmd + applescriptpath
//AppleScript実行
const cmd = sshcmd + applescriptpath

exec(cmd, (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
	return;
	}
})
