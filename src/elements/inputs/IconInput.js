import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'
import cx from 'classnames'

import Loader from '../loader/Loader'

import c from '../styles/variables'
import { border } from '../styles/helpers'

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
    const { error, valid, dirty, icon, loading, noHint, ...props } = this.props
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
    const message = error || 'All good!'
    const hasIcon = icon || (dirty && (error || valid)) || loading
    const iconClass = icon || cx({
      'ion-md-checkmark-circle': valid,
      'ion-md-close-circle': error,
    })

    forbiddenProps.forEach(element => delete props[element])

    return (
      <Container error={!!error}>
        <input
          {...props}
          value={value}
          onChange={this.handleChange}
          ref={input => (this._input = input)}
          autoComplete='new-password'
        />

        {hasIcon && (
          <IconContainer>
            <span className={!noHint && 'hint--right'} aria-label={message}>
              {loading && <Loader size='small' color='fill-grey' />}
              {!loading && <Icon className={iconClass} error={!!error} />}
            </span>
          </IconContainer>
        )}
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;

  input {
    ${border} width: 100%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-radius: 1px;
    background: white;

    &:focus,
    &.is-focused {
      outline: none;
      border-color: ${props => (props.error ? c.red100 : c.blue300)};
      box-shadow: 0 0 0 2px ${c.grey50};
    }
  }
`

const Icon = styled.i`
  color: ${props => (props.error ? c.red100 : c.blue100)};
`

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

Input.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  valid: PropTypes.bool,
  loading: PropTypes.bool,
  dirty: PropTypes.bool,
  noHint: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
