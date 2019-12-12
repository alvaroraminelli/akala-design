import styled from 'styled-components'

import Button from './Button'

import c from '../styles/variables'
import { buttonIcon } from '../styles/typography'

const ActionButton = styled(Button)`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;

  color: #fff;
  background-color: ${c.amber600};
  border-radius: 3px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  border: 1px solid transparent;

  svg {
    fill: #fff;
  }

  i {
    ${buttonIcon};
  }

  &:not(:disabled, .isDisabled, .isLoading) {
    &:hover,
    &:focus {
      border-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
      background-color: ${c.amber600};
    }
  }
  &:disabled,
  &.isLoading,
  &.isDisabled {
    opacity: 0.5;
    box-shadow: none;
  }
`

export default ActionButton
