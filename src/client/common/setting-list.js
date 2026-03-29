import {
  settingSyncId,
  settingTerminalId,
  settingPasswordsId
} from '../common/constants'

const e = window.translate

export default () => ([
  {
    id: settingTerminalId,
    title: e('terminal')
  },
  {
    id: settingSyncId,
    title: e('settingSync')
  },
  {
    id: settingPasswordsId,
    title: e('password')
  }
])
