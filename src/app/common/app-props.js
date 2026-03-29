/**
 * app path
 */
const { app } = require('electron')
const { resolve, dirname } = require('path')
const constants = require('./runtime-constants')
const installSrc = require('../lib/install-src')

function getDataPath () {
  const appName = app.getName() || 'electerm'
  const defaultValue = {
    appPath: app.getPath('appData'),
    isPortable: false
  }
  if (!constants.isWin) {
    return defaultValue
  }
  const exePath = dirname(app.getPath('exe'))
  const p = resolve(exePath, appName)
  if (
    installSrc === 'win-x64-portable.tar.gz' ||
    require('fs').existsSync(
      p
    )
  ) {
    return {
      appPath: exePath,
      exePath,
      isPortable: true
    }
  }
  return {
    ...defaultValue,
    exePath
  }
}

module.exports = {
  ...getDataPath(),
  sshKeysPath: resolve(
    app.getPath('home'),
    '.ssh'
  ),
  ...constants
}
