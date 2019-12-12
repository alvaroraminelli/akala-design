import styled from 'styled-components'

import Button from './Button'

import c from '../styles/variables'
import { buttonIcon } from '../styles/typography'

const PrimaryButton = styled(Button)`
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;

  color: #fff;
  fill: #fff;
  background-color: ${c.blue500};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);
  border: 1px solid transparent;

  svg {
    fill: white;
  }

  i {
    ${buttonIcon};
  }

  &:focus {
    border-color: rgba(0, 0, 0, 0.1);
    background-color: ${c.blue650};
  }

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.1);
  }
    
  &:active {
    background-color: ${c.blue900};
  }

  &:disabled,
  &.isLoading,
  &.isDisabled {
    opacity: 0.5;
    box-shadow: none;
  }
`

export default PrimaryButton
