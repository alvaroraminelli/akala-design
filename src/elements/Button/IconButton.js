import styled from 'styled-components'

import Button from './Button'
import { smallIcon } from '../styles/typography'

import c from '../styles/variables'

const IconButton = styled(Button)`
  padding: 0.5rem;
  text-align: center;
  color: ${c.grey500};
  fill: ${c.grey500};

  i {
    ${smallIcon};
  }

  &:not(:disabled):not(.isDisabled):not(.isLoading):not(.disabled) {
    &:hover,
    &:active,
    &:focus,
    &.active {
      color: ${c.blue500};
      fill: ${c.blue500};
    }
  }

  &:disabled,
  &.isDisabled {
    color: ${c.grey400};
    fill: ${c.grey400};
    cursor: default;
  }
`

export default IconButton
