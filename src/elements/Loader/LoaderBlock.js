import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Loader from './Loader'

import c from '../styles/variables'
import { flex, flexCenter, flexContentCenter } from '../styles/layout'

const Container = styled.div`
  ${flex} ${flexCenter} ${flexContentCenter};
`
const LoaderBlock = ({ className, height, style }) => (
  <Container className={className} style={{ background: c.grey100, height, ...style }}>
    <Loader color='grey' />
  </Container>
)

LoaderBlock.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

LoaderBlock.defaultProps = {
  height: 'auto',
  style: {},
}

export default LoaderBlock
