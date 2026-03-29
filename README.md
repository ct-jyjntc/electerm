<h1 align="center" style="padding-top: 60px;padding-bottom: 40px;">
    <a href="https://electerm.html5beta.com">
        <img src="https://github.com/electerm/electerm-resource/raw/master/static/images/electerm.png", alt="" />
    </a>
</h1>

# sshterm

[![GitHub version](https://badgers.space/github/release/ct-jyjntc/electerm?corner_radius=m)](https://github.com/ct-jyjntc/electerm/releases)
[![license](https://img.shields.io/github/license/ct-jyjntc/electerm)](https://github.com/ct-jyjntc/electerm/blob/sshterm/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Powered by manate](https://img.shields.io/badge/Powered%20by-manate-blue)](https://github.com/tylerlong/manate)

[![English](https://img.shields.io/badge/English-EN-blue)](README.md) [![中文](https://img.shields.io/badge/中文-Chinese-blue)](README_cn.md)

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%202.svg)](https://www.digitalocean.com/?refcode=c10bcb28b846&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

[![Vercel OSS Program](https://vercel.com/oss/program-badge.svg)](https://vercel.com/oss)

sshterm is a focused SSH workspace for desktop: terminal, SFTP file management, bookmark sync, jump hosts, SSH tunnels, and quick commands.

This fork intentionally removes features unrelated to SSH workflows, so the product surface stays smaller and easier to maintain.

Repository: [https://github.com/ct-jyjntc/electerm](https://github.com/ct-jyjntc/electerm)

<div align="center">
  <img src="https://github.com/electerm/electerm-resource/raw/master/static/images/electerm.gif", alt="" />
</div>

## Features

- Focused on SSH workflows instead of being a multi-protocol toolbox
- Works as an SSH terminal and SFTP file manager
- Support Window 7+(X64/ARM64), Mac OS 10.15+(x64/arm64), Linux(x64/arm64), even old Linux with glibc 2.17+ like UOS/Kylin/Ubuntu 18.04 etc
- Global hotkey to toggle window visibility (similar to guake, default is `ctrl + 2`)
- Multi platform(linux, mac, win)
- 🇺🇸 🇨🇳 🇧🇷 🇷🇺 🇪🇸 🇫🇷 🇹🇷 🇭🇰 🇯🇵 🇸🇦 🇩🇪 🇰🇷 🇮🇩 🇵🇱 Multi-language support([electerm-locales](https://github.com/electerm/electerm-locales), contributions/fixes welcome)
- Double click to directly edit (small) remote files.
- Auth with publicKey + password.
- Support Zmodem(rz, sz).
- Support ssh tunnel.
- Support [Trzsz](https://github.com/trzsz/trzsz)(trz/tsz), similar to rz/sz, and compatible with tmux.
- Transparent window(Mac, win).
- Terminal background image.
- Global/session proxy.
- UI/terminal theme
- Sync bookmarks/themes to github/gitee secret gist
- Quick commands for repeatable SSH operations
- SSH config import, jump hosts, and SSH tunnels
- Deep link support: Open connections with URLs like `ssh://user@host:22`
- Command line usage: use SSH URLs or CLI flags to open sessions

## Scope

sshterm keeps features directly related to SSH work:

- SSH terminal sessions
- SFTP and remote file editing
- SSH config import
- Proxy / jump host / tunnel workflows
- Bookmark sync
- Quick commands

This fork removes non-SSH product areas such as AI, MCP, RDP, VNC, Spice, Telnet, Serial, FTP, widgets, workspace management, and update UI.

## Download

- [GitHub repository](https://github.com/ct-jyjntc/electerm)
- [GitHub releases](https://github.com/ct-jyjntc/electerm/releases)

## Install

- Download artifacts from the fork release page:

```text
https://github.com/ct-jyjntc/electerm/releases
```

- Install from npm if you publish your own package name:

```bash
npm i -g sshterm

# After installation, it will immediately open for windows and linux,
# For macOS, it will open the drag to install panel

```

## Known issues

[https://github.com/ct-jyjntc/electerm/wiki/Know-issues](https://github.com/ct-jyjntc/electerm/wiki/Know-issues)

## Troubleshoot

[https://github.com/ct-jyjntc/electerm/wiki/Troubleshoot](https://github.com/ct-jyjntc/electerm/wiki/Troubleshoot)

## Discussion

[![Discord](https://img.shields.io/badge/Discord-Join-blue?logo=discord)](https://discord.gg/855W7g8EVd)

[Discussion board](https://github.com/ct-jyjntc/electerm/discussions)

![electerm-wechat-group-qr.jpg](https://electerm.html5beta.com/electerm-wechat-group-qr.jpg)

## Support

Would love to hear from you, please tell me what you think, [submit an issue](https://github.com/ct-jyjntc/electerm/issues), [Start a new discussion](https://github.com/ct-jyjntc/electerm/discussions/new), [create/fix language files](https://github.com/electerm/electerm-locales) or create pull requests, all welcome.

## Sponsor this project

Fork homepage:

[https://github.com/ct-jyjntc/electerm](https://github.com/ct-jyjntc/electerm)

## Dev

```bash
# May only works in Linux
# needs nodejs/npm, suggest using nvm to install nodejs/npm
# with nodejs 22.x

git clone git@github.com:ct-jyjntc/electerm.git
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

## Dev pitfalls

- `npm run app` only launches the Electron shell. In dev mode you also need `npm start`, otherwise the window may not load because port `5570` is not serving the frontend.
- For packaged app changes, rebuilding the installer requires more than `electron-builder`. Run `npm run b` first so `work/app` and the final `app.asar` input actually include your latest main-process code.
- Windows packaging may leave `dist/win-unpacked` locked if `sshterm.exe` or `electron.exe` is still running. Kill those processes before rebuilding installers.
- The app data path for installed builds should follow Electron `userData`. If you rename the app, avoid hardcoded `electerm` path joins in main-process code.
- `DATA_PATH=...` is useful for isolating local verification, but a healthy installed build must also start without `DATA_PATH`.
- Some packaging scripts still print publish-related warnings during local builds. Verify the actual artifact output instead of assuming every warning means the package failed.

## Test

```bash
npm run b
npm run prepare-test
cp .sample.env .env

# edit .env, fill your test host/username/password, may only works in mac OS
npm run test
```

## Test build

```bash
# May only works in Linux
# Install yarn first(to do yarn autoclean)
# See https://yarnpkg.com/en/docs/install

# Build linux only with -l
npm i
npm run b
npm run pb
./node_modules/.bin/electron-builder --linux tar.gz
# or replace tar.gz to rpm/deb/AppImage
# check dist/ folder

# build for linux arm/
./node_modules/.bin/electron-builder --linux --arm64
```

## Video guide

- [https://electerm.html5beta.com/videos](https://electerm.html5beta.com/videos)

## Change log

Visit [Releases](https://github.com/ct-jyjntc/electerm/releases).

## Contact author

[zxdong@gmail.com](mailto:zxdong@gmail.com)


## License

MIT

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=electerm/electerm&type=Date)](https://www.star-history.com/#electerm/electerm&Date)
