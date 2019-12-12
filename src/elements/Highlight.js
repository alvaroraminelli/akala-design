import PropTypes from 'prop-types'
import React, { Component } from 'react'
import hljs from 'highlight.js/lib/highlight'
import styled from 'styled-components'
import cx from 'classnames'

class Highlight extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    light: PropTypes.bool,
    noPadding: PropTypes.bool,
  }

  static defaultProps = {
    className: 'json',
  }

  componentDidMount () {
    this.highlightCode()
  }

  componentDidUpdate () {
    this.highlightCode()
  }

  highlightCode () {
    const { className } = this.props

    hljs.registerLanguage(className, require(`highlight.js/lib/languages/${className}`))

    document.querySelectorAll('pre code.shouldHightlight').forEach(node => {
      hljs.highlightBlock(node)
    })
  }

  render () {
    const { className, children, light, noPadding } = this.props

    return (
      <pre>
        <Code className={cx('shouldHightlight', className, { light, noPadding })}>{children}</Code>
      </pre>
    )
  }
}

const Code = styled.code`
  overflow-wrap: break-word;
  word-wrap: break-word;

  word-break: break-all;
  word-break: break-word;

  hyphens: auto;

  white-space: pre-wrap;

  &.light {
    background-color: #ffffff !important;
    color: rgba(97, 91, 97) !important;
  }

  &.noPadding {
    padding: 0 !important;
  }
`

export default Highlight
