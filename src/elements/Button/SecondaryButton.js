import styled from 'styled-components'

import Button from './Button'

import c from '../styles/variables'
import { buttonIcon } from '../styles/typography'

const SecondaryButton = styled(Button)`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;

  border: 1px solid transparent;

  i {
    ${buttonIcon};
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &.no-border {
    border: none !important;
  }

  &.danger {
    color: ${c.red500};
    border: 1px solid ${c.red500};
    svg {
      fill: ${c.red500};
    }

    &:hover,
    &:active,
    &:focus {
      border-color: ${c.red900};
      color: ${c.red900};
    }
  }

  &.success {
    color: ${c.blue500};
    border: 1px solid ${c.blue500};
    svg {
      fill: ${c.blue500};
    }

    &:hover,
    &:active,
    &:focus {
      border-color: ${c.blue900};
      color: ${c.blue900};
    }
  }

  &.upload {
    color: ${c.grey700};
    border: 1px solid ${c.grey700};
    svg {
      fill: ${c.grey700};
    }

    &:hover,
    &:active,
    &:focus {
      border-color: ${c.grey900};
      color: ${c.grey900};
    }
  }

  &:not(:disabled, .isDisabled, .isLoading) {
    &:hover,
    &:active,
    &:focus {
      outline: none;
      text-decoration: none;
      box-shadow: none;
      background-color: rgba(0, 0, 0, 0.01);
    }
  }

  &:disabled,
  &.isLoading,
  &.isDisabled {
    opacity: 0.5;
    cursor: default;
  }
`

export default SecondaryButton
