/**
 * Shared NeDB instance for migrate scripts.
 * Intentionally created without enc/dec because legacy NeDB data was never
 * encrypted and these scripts must be able to read/write the raw nedb files
 * during the pre-migration upgrade phase.
 */

const { appPath, defaultUserName, appName } = require('../common/app-props')
const { createDb } = require('../lib/nedb')

module.exports = createDb(appPath, defaultUserName, appName)
// exports: { dbAction, tables }
