import styled from 'styled-components'

import Button from './Button'
import { flex, flexCenter } from '../styles/layout'

import c from '../styles/variables'

const HelpButton = styled(Button)`
  ${flex}
  ${flexCenter}

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;

  height: 24px;
  padding: 2px 6px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.125);

  color: ${c.grey500};
  background-color: ${c.grey100};

  &:hover {
    border-color: ${c.grey500};
  }

  .btn--content {
    margin-left: 4px;
  }

  a {
    color: ${c.grey500};

    &:hover {
      text-decoration: none;
    }
  }
`

HelpButton.defaultProps = {
  iconClass: 'ion-md-help-buoy',
}

export default HelpButton
