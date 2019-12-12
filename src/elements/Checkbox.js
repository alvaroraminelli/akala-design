import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

import c from './styles/variables'

const Checkbox = props => {
  const { onClick, checked } = props

  return (
    <CheckboxContainer onClick={onClick}>
      <CheckboxInner className={cx({ active: checked })} />
    </CheckboxContainer>
  )
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &.disabled {
    cursor: default;
  }

  &:focus:not(.disabled) {
    border-color: ${c.blue900};
  }
`

const CheckboxInner = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-align: center;

  position: relative;
  outline: none;
  cursor: pointer;

  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: transparent;
  border: 1px solid ${c.grey400};
  transition: border-color 0.05s ease-out;

  &:hover,
  &.active {
    border-color: ${c.blue500};
  }

  &.active::after {
    color: ${c.blue500};
    content: '\f3fd';
    display: inline-block;

    font-family: 'Ionicons', sans-serif;
    speak: none;
    font-size: 28px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 22px;
    font-smoothing: antialiased;

    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 22px;
    height: 22px;
  }
`

Checkbox.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.bool,
}

export default Checkbox
