import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import cx from 'classnames'

import { Loader } from '../Loader'

class Button extends Component {
  handleOnClick = e => {
    const { onClick, isDisabled, isLoading } = this.props
    if (!onClick || isDisabled || isLoading) {
      return
    }
    onClick(e)
  }

  render () {
    const {
      className,
      isDisabled,
      isLoading,
      loaderSize,
      ariaLabel,
      catchMouseDown,
      iconClass,
      refButton,
      ...props
    } = this.props

    const fullClass = cx(className, { isDisabled, isLoading })

    const additionnalHandlers = {}

    if (catchMouseDown) {
      additionnalHandlers.onMouseDown = e => e.stopPropagation()
    }

    return (
      <Container
        tabIndex='0'
        className={fullClass}
        onClick={this.handleOnClick}
        aria-label={ariaLabel}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            this.handleOnClick(event)
          }
        }}
        innerRef={refButton}
        {...additionnalHandlers}
        {...props}
      >
        {isLoading && (
          <div className='loader-overlay'>
            <Loader size={loaderSize} />
          </div>
        )}
        {iconClass && (
          <i className={iconClass} />
        )}
        <div className='btn--content'>{this.props.children}</div>
      </Container>
    )
  }
}

const Container = styled.div`
  height: auto;
  cursor: pointer;
  display: inline-flex;

  border-radius: 3px;
  font-weight: 400;
  text-decoration: none;
  line-height: 1em;
  padding: 14px 20px;
  border: 0;
  vertical-align: middle;
  -webkit-appearance: none;
  color: inherit;
  background-color: transparent;
  user-select: none;
  pointer-events: auto;

  &.no-padding {
    padding: 0 !important;
  }

  &.glued-right {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.glued-left {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.15);
  }
  &:disabled,
  &.isDisabled,
  &.isLoading {
    cursor: default;
    pointer-events: none;
  }

  &.isLoading {
    .btn--content {
      opacity: 0;
    }
  }

  .btn--content {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  position: relative;
  .loader-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .loop i {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

Button.propTypes = {
  className: PropTypes.string,
  loaderSize: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  catchMouseDown: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  ariaLabel: PropTypes.string,
  iconClass: PropTypes.string,
  refButton: PropTypes.func,
}

Button.defaultProps = {
  className: 'success',
}

export default Button
