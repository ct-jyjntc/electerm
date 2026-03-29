/**
 * Field renderers for config-driven forms
 * Maps field types to React components
 */
import React from 'react'
import { Form, Input, InputNumber, Switch, Select, AutoComplete, Alert, Radio } from 'antd'
import { ColorPickerItem } from './color-picker-item.jsx'
import Password from '../../common/password.jsx'
import InputAutoFocus from '../../common/input-auto-focus.jsx'
import ProxyField from './proxy.jsx'
import X11Field from './x11.jsx'
import SshTunnels from './ssh-tunnels.jsx'
import SshAgent from './ssh-agent.jsx'
import ConnectionHopping from './connection-hopping.jsx'
import TerminalBackgroundField from './terminal-background.jsx'
import ExecSettingsField from './exec-settings-field.jsx'
import useQuickCmds from './quick-commands.jsx'
import ProfileItem from './profile-item.jsx'
import renderRunScripts from './run-scripts.jsx'
import SerialPathSelector from './serial-path-selector.jsx'
import SshHostSelector from './ssh-host-selector.jsx'
import SshAuthTypeSelector from './ssh-auth-type-selector.jsx'
import SshAuthSelector from './ssh-auth-selector.jsx'
import CategorySelect from './category-select.jsx'
const Fragment = React.Fragment
const FormItem = Form.Item

const { TextArea } = Input
const commonRenderTypes = new Set([
  'input',
  'textarea',
  'number',
  'switch',
  'select',
  'autocomplete',
  'radio',
  'colorTitle',
  'password'
])

/**
 * Render a single form item based on config
 * @param {Object} item - Field configuration with type, name, label, rules, etc.
 * @param {Object} formItemLayout - Ant Design form layout
 * @param {Object} form - Ant Design form instance
 * @param {Object} ctxProps - Context props (bookmarkGroups, formData, etc.)
 * @param {number} index - Index for key generation
 * @returns {JSX.Element|null} Rendered form item
 */
export function renderFormItem (item, formItemLayout, form, ctxProps, index) {
  const { type, name, label, rules, valuePropName, hidden, normalize } = item
  const itemKey = name || `${type}-${index}`

  // Render simple AntD controls directly inside Form.Item
  if (commonRenderTypes.has(type)) {
    const cls = hidden ? 'hide' : undefined
    let control = null
    switch (type) {
      case 'input':
        control = <Input {...item.props} />
        break
      case 'textarea':
        control = <TextArea autoSize={{ minRows: 1 }} {...item.props} />
        break
      case 'number':
        control = <InputNumber min={1} max={65535} step={1} {...item.props} />
        break
      case 'switch':
        control = <Switch {...item.props} />
        break
      case 'select':
        control = <Select options={item.options} {...item.props} />
        break
      case 'autocomplete':
        control = <AutoComplete options={item.options} {...item.props} />
        break
      case 'radio':
        control = (
          <Radio.Group
            options={item.options}
            optionType='button'
            buttonStyle='solid'
            size='small'
            {...item.props}
          />
        )
        break
      case 'colorTitle':
        control = <InputAutoFocus prefix={<ColorPickerItem />} {...item.props} />
        break
      case 'password':
        control = <Password {...item.props} />
        break
      default:
        control = null
    }
    if (!control) return null
    const formItemProps = {
      ...formItemLayout,
      className: cls,
      label: typeof label === 'string' ? label : label(),
      name,
      rules,
      valuePropName,
      normalize
    }
    return (
      <FormItem
        key={itemKey}
        {...formItemProps}
      >
        {control}
      </FormItem>
    )
  }

  // Render complex/custom components directly (no extra wrapper component)
  switch (type) {
    case 'alert':
      return <Alert key={itemKey} {...item.props} />
    case 'info':
      return <Alert key={itemKey} type='info' {...item.props} />
    case 'warning':
      return <Alert key={itemKey} type='warning' {...item.props} />
    case 'categorySelect':
      return (
        <CategorySelect
          key={itemKey}
          bookmarkGroups={ctxProps.bookmarkGroups || []}
          form={ctxProps.form}
          name={item.name}
          formData={ctxProps.formData}
        />
      )
    case 'proxy':
      return <ProxyField key={itemKey} bookmarks={ctxProps.bookmarks} />
    case 'x11':
      return <X11Field key={itemKey} form={form} />
    case 'sshTunnels':
      return <SshTunnels key={itemKey} form={form} formData={ctxProps.formData} />
    case 'sshAgent':
      return <SshAgent key={itemKey} />
    case 'connectionHopping':
      return (
        <ConnectionHopping
          key={itemKey}
          form={form}
          formData={ctxProps.formData || {}}
          trim={ctxProps.trim}
          store={ctxProps.store}
        />
      )
    case 'terminalBackground':
      return <TerminalBackgroundField key={itemKey} />
    case 'execSettings':
      return <ExecSettingsField key={itemKey} />
    case 'profileItem':
      return <ProfileItem key={itemKey} store={ctxProps.store} profileFilter={item.profileFilter} />
    case 'quickCommands':
      return <Fragment key={itemKey}>{useQuickCmds(form, ctxProps.formData || {})}</Fragment>
    case 'runScripts':
      return <Fragment key={itemKey}>{renderRunScripts()}</Fragment>
    case 'serialPathSelector':
      return (
        <SerialPathSelector
          key={itemKey}
          serials={ctxProps.serials}
          loaddingSerials={ctxProps.loaddingSerials}
          store={ctxProps.store}
          {...item.props}
        />
      )
    case 'sshHostSelector':
      return (
        <SshHostSelector
          key={itemKey}
          ips={ctxProps.ips || []}
          useIp={ctxProps.useIp}
          form={ctxProps.form}
          onBlur={ctxProps.handleBlur}
          onPaste={ctxProps.handlePaste}
          trim={ctxProps.trim}
          {...item.props}
        />
      )
    case 'sshAuthTypeSelector':
      return (
        <SshAuthTypeSelector
          key={itemKey}
          authType={ctxProps.authType}
          handleChangeAuthType={ctxProps.onChangeAuthType}
          {...item.props}
        />
      )
    case 'sshAuthSelector':
      return (
        <SshAuthSelector
          key={itemKey}
          store={ctxProps.store}
          form={form}
          authType={ctxProps.authType}
          profileFilter={item.profileFilter}
          {...item.props}
        />
      )
    default:
      console.warn(`Unknown field type: ${type}`)
      return null
  }
}
