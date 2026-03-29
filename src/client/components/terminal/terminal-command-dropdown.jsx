import { Component } from 'manate/react/class-components'
import { refsStatic, refs } from '../common/ref'
import SuggestionItem from './cmd-item'
import uid from '../../common/uid'
import classnames from 'classnames'

export default class TerminalCmdSuggestions extends Component {
  state = {
    cursorPosition: {},
    showSuggestions: false,
    reverse: false,
    cmd: ''
  }

  componentDidMount () {
    refsStatic.add('terminal-suggestions', this)
  }

  componentWillUnmount () {
    refsStatic.remove('terminal-suggestions')
  }

  openSuggestions = (cursorPosition, cmd) => {
    if (!this.state.showSuggestions) {
      document.addEventListener('click', this.handleClickOutside)
      document.addEventListener('keydown', this.handleKeyDown)
    }

    const {
      left,
      top,
      cellHeight
    } = cursorPosition
    const w = window.innerWidth
    const h = window.innerHeight

    const position = {}
    const reverse = top > h / 2

    // Use right position if close to right edge
    if (left > w / 2) {
      position.right = w - left
    } else {
      position.left = left
    }

    // Use bottom position if close to bottom edge
    if (reverse) {
      position.bottom = h - top + cellHeight * 1.5
    } else {
      position.top = top + cellHeight
    }
    this.setState({
      showSuggestions: true,
      cursorPosition: position,
      cmd,
      reverse
    })
  }

  closeSuggestions = () => {
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('keydown', this.handleKeyDown)
    this.setState({
      showSuggestions: false,
      cmd: ''
    })
  }

  handleClickOutside = (event) => {
    const suggestionElement = document.querySelector('.terminal-suggestions-wrap')
    if (suggestionElement && !suggestionElement.contains(event.target)) {
      this.closeSuggestions()
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.closeSuggestions()
    }
  }

  handleDelete = (item) => {
    window.store.terminalCommandHistory.delete(item.command)
  }

  handleSelect = (item) => {
    const { activeTabId } = window.store
    const terminal = refs.get('term-' + activeTabId)
    if (!terminal) {
      console.log('No active terminal found')
      return
    }

    // const titleElement = domEvent.target.closest('.ant-menu-title-content')
    // const command = titleElement?.firstChild?.textContent
    const { command } = item
    const { cmd } = this.state
    let txt = ''
    if (cmd && command.startsWith(cmd)) {
      txt = command.slice(cmd.length)
    } else {
      const pre = '\b'.repeat(cmd.length)
      txt = pre + command
    }
    terminal.attachAddon._sendData(txt)
    // Update the terminal's currentInput to reflect the full command
    terminal.setCurrentInput(command)
    terminal.term.focus()
    this.closeSuggestions()
  }

  processCommands = (commands = [], type, uniqueCommands, res) => {
    const { cmd } = this.state
    commands
      .filter(command => command && command.startsWith(cmd))
      .forEach(command => {
        if (!uniqueCommands.has(command)) {
          uniqueCommands.add(command)
          res.push({
            id: uid(),
            command,
            type
          })
        }
      })
  }

  getSuggestions = () => {
    const uniqueCommands = new Set()
    const {
      history = [],
      batch = [],
      quick = []
    } = this.props.suggestions || {}
    const res = []
    this.processCommands(history, 'H', uniqueCommands, res)
    this.processCommands(batch, 'B', uniqueCommands, res)
    this.processCommands(quick, 'Q', uniqueCommands, res)
    return this.state.reverse ? res.reverse() : res
  }

  render () {
    const { showSuggestions, cursorPosition, reverse } = this.state
    if (!showSuggestions) {
      return null
    }
    const suggestions = this.getSuggestions()
    const cls = classnames('terminal-suggestions-wrap', {
      reverse
    })
    return (
      <div className={cls} style={cursorPosition}>
        <div className='terminal-suggestions-list'>
          {
            suggestions.map(item => {
              return (
                <SuggestionItem
                  key={item.id}
                  item={item}
                  onSelect={this.handleSelect}
                  onDelete={this.handleDelete}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}
