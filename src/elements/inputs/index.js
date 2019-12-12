import styled from 'styled-components'

import Input from './Input'
import c from '../styles/variables'
import { border } from '../styles/helpers'

export Input from './Input'
export IconInput from './IconInput'
export EditableInput from './EditableInput'
export InputWithInfo from './InputWithInfo'

export const BasicInput = styled(Input)`
  ${border} width: 100%;
  padding: 0.5rem;
  border-radius: 1px;
  background: white;

  &:focus,
  &.is-focused {
    outline: none;
    border-color: ${c.blue300};
    box-shadow: 0 0 0 2px ${c.grey100};
  }
`

export const SearchInput = styled(BasicInput)`
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 30px;
`
