import React from 'react'
import PropTypes from 'prop-types'

const LoaderIcon = ({ size }) => (
  <svg
    version='1.1' id='LoaderIcon' viewBox='0 0 12 12'
    width={`${size}px`} height={`${size}px`}>
    <path d='M1.5,1.9V4H0V1.9c0-0.5,0.2-1,0.6-1.3C0.9,0.2,1.4,0,1.9,0H4v1.5H1.9C1.6,1.5,1.5,1.6,1.5,1.9z M1.9,10.5H4V12H1.9c-0.5,0-1-0.2-1.3-0.6S0,10.6,0,10.1V8h1.5v2.1C1.5,10.3,1.6,10.5,1.9,10.5z M10.1,0c0.5,0,1,0.2,1.3,0.5C11.8,0.9,12,1.4,12,1.9V4h-1.5V1.9c0-0.2-0.1-0.4-0.4-0.4H8V0H10.1z M10.5,10.1V8H12v2.1c0,0.5-0.2,1-0.5,1.3c-0.4,0.4-0.8,0.6-1.3,0.6H8v-1.5h2.1C10.4,10.5,10.5,10.3,10.5,10.1z' />
  </svg>
)

LoaderIcon.propTypes = {
  size: PropTypes.number,
}

export default LoaderIcon
