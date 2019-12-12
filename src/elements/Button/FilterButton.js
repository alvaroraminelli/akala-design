import styled from 'styled-components'

import Button from './Button'

import c from '../styles/variables'

const FilterButton = styled(Button)`
  min-width: 40px;
  text-align: center;
  padding: 8px 12px;

  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${c.grey400};
  border-radius: 30px;
  border: 1px solid ${c.grey300};
  transition: border-color 0.05s ease-out;

  svg {
    fill: ${c.grey400};
  }

  &:not(:disabled, .isDisabled, .isLoading) {
    &:hover,
    &:active,
    &:focus,
    &.active {
      outline: none;
      text-decoration: none;
      box-shadow: none;
      border-color: ${c.blue500};
      color: ${c.blue500};
    }
  }
`

export default FilterButton
