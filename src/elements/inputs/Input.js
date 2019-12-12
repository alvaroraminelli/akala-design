import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

class Input extends Component {
  state = {
    value: this.props.value || '',
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e)
    } else {
      this.setState({ value: e.target.value })
    }
  }

  clearValue = () => this.setState({ value: '' })

  focus = () => findDOMNode(this._input).focus() // eslint-disable-line react/no-find-dom-node

  render () {
    const { className, onBlur, onFocus, ...props } = this.props
    const { value } = this.state

    const forbiddenProps = [
      'initialValue',
      'autofill',
      'onUpdate',
      'invalid',
      'pristine',
      'active',
      'touched',
      'visited',
      'autofilled',
      '_root',
      '__ownerID',
      '__hash',
      '__altered',
    ]

    forbiddenProps.forEach(element => delete props[element])

    return (
      <input
        {...props}
        className={className}
        value={value}
        onChange={this.handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete='new-password'
        ref={input => (this._input = input)}
      />
    )
  }
}

Input.propTypes = {
  value: PropTypes.string,
  loading: PropTypes.bool,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
