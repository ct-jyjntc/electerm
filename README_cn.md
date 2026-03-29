<h1 align="center" style="padding-top: 60px;padding-bottom: 40px;">
    <a href="https://electerm.github.io/electerm">
        <img src="https://github.com/electerm/electerm-resource/raw/master/static/images/electerm.png", alt="" />
    </a>
</h1>

# sshterm [![Tweet](https://badgers.space/badge/Tweet/Tweet/social)](https://twitter.com/intent/tweet?text=Open%20sourced%20terminal%2Fssh%2Fsftp%20client(linux%2C%20mac%2C%20win)&url=https%3A%2F%2Fgithub.com%2Felecterm%2Felecterm&hashtags=electerm,ssh,terminal,sftp)

[![GitHub version](https://badgers.space/github/release/electerm/electerm?corner_radius=m)](https://github.com/electerm/electerm/releases)
[![Build Status](https://github.com/electerm/electerm/actions/workflows/mac-test-1.yml/badge.svg)](https://github.com/electerm/electerm/actions)
[![license](https://img.shields.io/github/license/electerm/electerm)](https://github.com/electerm/electerm/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Get it from the Snap Store](https://img.shields.io/badge/Snap-Store-green)](https://snapcraft.io/electerm)
[![Get it from the Microsoft Store](https://img.shields.io/badge/Microsoft-Store-blue)](https://www.microsoft.com/store/apps/9NCN7272GTFF)
[![Debian Repository](https://img.shields.io/badge/Debian-Repository-red)](https://electerm-repos.html5beta.com/deb)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/electerm?label=Sponsors)](https://github.com/sponsors/electerm)
[![Powered by manate](https://img.shields.io/badge/Powered%20by-manate-blue)](https://github.com/tylerlong/manate)
[![Discord](https://img.shields.io/badge/Discord-Join-blue?logo=discord)](https://discord.gg/855W7g8EVd)
[![star](https://atomgit.com/electerm/electerm/star/badge.svg)](https://atomgit.com/electerm/electerm)

[![English](https://img.shields.io/badge/English-EN-blue)](README.md) [![中文](https://img.shields.io/badge/中文-Chinese-blue)](README_cn.md)

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%202.svg)](https://www.digitalocean.com/?refcode=c10bcb28b846&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

[![Vercel OSS Program](https://vercel.com/oss/program-badge.svg)](https://vercel.com/oss)

sshterm 是一个更聚焦的 SSH 工作台：提供终端、SFTP 文件管理、书签同步、跳板机、SSH 隧道和快捷命令。

这个 fork 有意删除了与 SSH 无直接关系的功能，目标是降低产品复杂度和后续维护成本。

有经验的开发者也可以尝试运行于浏览器(支持移动设备)的web app版本: [electerm-web](https://github.com/electerm/electerm-web) 或者 [docker image for electerm-web](https://github.com/electerm/electerm-web-docker)

在线演示: [https://electerm-demo.html5beta.com](https://electerm-demo.html5beta.com)

<div align="center">
  <img src="https://github.com/electerm/electerm-resource/raw/master/static/images/electerm.gif", alt="" />
</div>

## 功能特性

- 聚焦 SSH 工作流，而不是多协议大而全工具
- 支持 SSH 终端、本地和远程文件管理、SFTP 文件传输
- 支持Window 7+(X64/ARM64), Mac OS 10.15+(x64/arm64), Linux(x64/arm64), 以及Linux with glibc 2.17+ like UOS/Kylin/Ubuntu 18.04 etc
- 全局快捷键切换隐藏显示窗口(类似guake, 默认快捷键`ctrl + 2`)
- 多平台支持(linux, mac, win)
- 🇺🇸 🇨🇳 🇧🇷 🇷🇺 🇪🇸 🇫🇷 🇹🇷 🇭🇰 🇯🇵 🇸🇦 🇩🇪 🇰🇷 🇮🇩 🇵🇱 多国语言支持([electerm-locales](https://github.com/electerm/electerm-locales), 欢迎提交代码)
- 双击直接编辑远程文件.
- 支持密码或者密匙登录.
- 支持Zmodem(rz, sz).
- 支持ssh隧道
- 支持[Trzsz](https://github.com/trzsz/trzsz)(trz/tsz), 类似rz/sz, 兼容tmux.
- 支持透明窗口(Mac, win).
- 支持设置终端背景图片.
- 支持代理服务器.
- 支持主题
- 支持同步书签和主题等数据到 github/gitee 私人 gist
- 支持快捷命令，方便重复 SSH 操作
- 支持 SSH config 导入、跳板机和 SSH 隧道
- 支持命令行使用: 请参阅[wiki](https://github.com/electerm/electerm/wiki/Command-line-usage)
- 深度链接支持: 使用 `ssh://user@host:22` 等 URL 打开连接 - 详见 [深度链接支持 wiki](https://github.com/electerm/electerm/wiki/Deep-link-support)

## 功能边界

sshterm 保留与 SSH 直接相关的能力：

- SSH 终端会话
- SFTP 和远程文件编辑
- SSH config 导入
- 代理 / 跳板机 / 隧道
- 书签同步
- 快捷命令

这个 fork 已删除这些非 SSH 功能：AI、MCP、RDP、VNC、Spice、Telnet、Serial、FTP、widgets、workspace、升级 UI。

## 下载

- [主页](https://electerm.html5beta.com)
- [sourceforge](https://sourceforge.net/projects/electerm.mirror/files/)
- [github releases](https://github.com/electerm/electerm/releases)

## 安装

- Mac OS用户: `brew install --cask electerm`
- Snap: `sudo snap install electerm --classic`
- 一些Linux发行版的内置软件商店(Ubuntu, Deepin, Mint...).
- 不支持`rpm`, `deb`, or `snap` 的Linux发行版可以尝试 `tar.gz`版本.
- Windows用户可以从[windows store](https://www.microsoft.com/store/apps/9NCN7272GTFF), 命令行安装工具 [winget](https://github.com/microsoft/winget-cli)，以及[scoop](https://github.com/lukesampson/scoop) :

```powershell
# winget https://github.com/microsoft/winget-cli
winget install electerm.electerm

# scoop https://github.com/lukesampson/scoop
scoop bucket add dorado https://github.com/chawyehsu/dorado
scoop install dorado/electerm
```

- 从Debian软件源安装 (适用于Debian/Ubuntu系统) 使用 `apt` 命令

查看 [https://electerm-repos.html5beta.com/deb](https://electerm-repos.html5beta.com/deb)

- 从npm安装

```bash
npm i -g electerm

# after installation, it will immediately open for windows and linux,
# for macOS, it will open the drag to install panel

```

## 已知问题

[https://github.com/electerm/electerm/wiki/Know-issues](https://github.com/electerm/electerm/wiki/Know-issues)

## 疑难解答

[https://github.com/electerm/electerm/wiki/Troubleshoot](https://github.com/electerm/electerm/wiki/Troubleshoot)

## 讨论区

[![Discord](https://img.shields.io/badge/Discord-Join-blue?logo=discord)](https://discord.gg/855W7g8EVd)

[Discussion board](https://github.com/electerm/electerm/discussions)

![electerm-wechat-group-qr.jpg](https://electerm.html5beta.com/electerm-wechat-group-qr.jpg)

## 支持

欢迎[提交问题/建议](https://github.com/electerm/electerm/issues), [展开讨论](https://github.com/electerm/electerm/discussions/new), [修复或者创建语言文件](https://github.com/electerm/electerm-locales)或者贡献代码。

## 赞助项目

github sponsor

[https://github.com/sponsors/electerm](https://github.com/sponsors/electerm)

kofi

[https://ko-fi.com/zhaoxudong](https://ko-fi.com/zhaoxudong)

微信赞赏码

[![wechat donate](https://electerm.html5beta.com/electerm-wechat-donate.png)](https://github.com/electerm)

## 开发

```bash
# May only works in Linux
# needs nodejs/npm, suggest using fnm to install nodejs/npm
# with nodejs 22.x

git clone git@github.com:electerm/electerm.git
cd electerm
npm config set legacy-peer-deps true
npm i

# start vite dev server, requires port 5570
npm start

# in a separate terminal session run app
npm run app

# code format check
npm run lint

# code format fix
npm run fix
```

## 开发易踩坑

- `npm run app` 只会启动 Electron 外壳；开发模式还需要同时执行 `npm start`，否则 `5570` 端口没有前端页面，窗口可能起不来。
- 打安装包前不能只跑 `electron-builder`。先执行 `npm run b`，确保 `work/app` 和最终 `app.asar` 输入已经包含你最新的主进程代码。
- Windows 下如果 `sshterm.exe`、`electerm.exe` 或 `electron.exe` 还在运行，`dist/win-unpacked` 很容易被锁住，导致重新打包失败。
- 安装版默认数据目录应基于 Electron 的 `userData`，不要在主进程里继续手写 `electerm` 路径拼接，改名后二开特别容易踩坑。
- `DATA_PATH=...` 适合做隔离验证，但健康的安装版必须在不设置 `DATA_PATH` 的情况下也能正常启动。
- 本地打包时一些脚本可能仍会打印发布相关 warning，要以实际产物是否生成、安装后是否可启动为准，不要只看最后一行日志。

## 测试

```bash
npm run b
npm run prepare-test
cp .sample.env .env

# edit .env, fill your test host/username/password, may only works in mac OS
npm run test
```

## 测试构建

```bash
# May only works in Linux
# Install yarn first(to do yarn autoclean)
# See https://yarnpkg.com/en/docs/install

# Build linux only with -l
npm i
npm run b
./node_modules/.bin/electron-builder --linux tar.gz
# or replace tar.gz to rpm/deb/AppImage
# check dist/ folder

# build for linux arm/
./node_modules/.bin/electron-builder --linux --arm64
```

## 使用视频

- [https://electerm.html5beta.com/videos](https://electerm.html5beta.com/videos)

## 变更历史

Visit [Releases](https://github.com/electerm/electerm/releases).

## 联系作者

[zxdong@gmail.com](mailto:zxdong@gmail.com)

## 许可证

MIT

## 收藏历史

[![Star History Chart](https://api.star-history.com/svg?repos=electerm/electerm&type=Date)](https://www.star-history.com/#electerm/electerm&Date)
