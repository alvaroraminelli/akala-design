import PropTypes from 'prop-types'
import React, { Component } from 'react'
import cx from 'classnames'

import { IconButton } from './Button'
import c from './styles/variables'

class Clip extends Component {
  state = {
    hasClicked: false,
  }

  copyToClipboard = e => {
    const Clipboard = require('clipboard')
    const { text, onCopy } = this.props
    const clipboard = new Clipboard(e.target, { text: () => text })
    const destroyClipboard = () => clipboard.destroy()

    clipboard.on('success', () => {
      if (onCopy) {
        onCopy(text)
      }

      this.setState({ hasClicked: true })
      destroyClipboard()
    })

    clipboard.on('error', destroyClipboard)
    clipboard.onClick(e)
  }

  render () {
    const { className } = this.props
    const { hasClicked } = this.state

    return (
      <IconButton
        onClick={this.copyToClipboard}
        className={cx(className)}
        style={{ ...(hasClicked ? { color: c.blue500 } : {}) }}
        {...this.props}
      >
        <i className='ion-md-clipboard' />
      </IconButton>
    )
  }
}

Clip.propTypes = {
  text: PropTypes.string.isRequired,
  onCopy: PropTypes.func,
  className: PropTypes.string,
  hasClickedClassName: PropTypes.string,
}

export default Clip
