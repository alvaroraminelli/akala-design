import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import LoaderIcon from './LoaderIcon'

import c from '../styles/variables'
import { rotating } from '../styles/animations'

const sizesMap = {
  small: 13,
  normal: 18,
}

const colorsMap = {
  white: '#fff',
  grey: c.grey700,
  blue: c.blue500,
}

const Loop = styled.div`
  animation: ${rotating} 0.8s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${props => colorsMap[props.color] || c.grey700};
`

const Loader = ({ size, color, className }) => (
  <Loop
    color={color}
    className={className}
    style={{ width: sizesMap[size], height: sizesMap[size], padding: 0, margin: 0, border: 'none' }}
  >
    <LoaderIcon size={sizesMap[size]} />
  </Loop>
)

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'normal']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['grey', 'white', 'blue']),
}

Loader.defaultProps = {
  size: 'normal',
  className: '',
}

export default Loader
