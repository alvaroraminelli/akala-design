import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import styled from 'styled-components'
import { border } from '../styles/helpers'
import c from '../styles/variables'

class InputWithInfo extends Component {
  state = {
    showContent: false,
  }

  componentDidMount () {
    document.addEventListener('click', this.onInfoWithInputClick)
    document.addEventListener('keyup', this.onPressTab)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onInfoWithInputClick)
    document.removeEventListener('keyup', this.onPressTab)
  }

  onFocus = () => {
    const { onFocus } = this.props
    this.setState({
      showContent: true,
    })

    if (onFocus) {
      onFocus()
    }
  }

  onInfoWithInputClick = event => {
    const { input, infoContainer } = this

    if (
      input
      && !input._input.contains(event.target)
      && infoContainer
      && !infoContainer.contains(event.target)
    ) {
      this.setState({ showContent: false })
    }
  }

  onPressTab = event => {
    if (event.code === 'Tab' && !this.container.contains(event.target)) {
      this.setState({ showContent: false })
    }
  }

  render () {
    const {
      loading,
      type,
      value,
      style,
      inputStyle,
      infoContent,
      infoContentClassName,
      infoContentStyle,
      showInfo,
      ...props
    } = this.props
    const { showContent } = this.state

    return (
      <div
        style={style}
        ref={ref => {
          this.container = ref
        }}
      >
        <StyledInput
          innerRef={ref => {
            this.input = ref
          }}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          loading={loading}
          type={type}
          value={value}
          style={inputStyle}
          {...props}
        />
        {((showContent && infoContent !== '') || showInfo) && (
          <InfoContainer
            innerRef={ref => {
              this.infoContainer = ref
            }}
            style={infoContentStyle}
            className={infoContentClassName}
            onClick={this.onInfoContainerClick}
          >
            {infoContent}
          </InfoContainer>
        )}
      </div>
    )
  }
}

const StyledInput = styled(Input)`
  ${border} width: 100%;
  box-sizing: border-box;
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

const InfoContainer = styled.div`
  background: #ffffff;
  box-shadow: 0 1px 28px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 0.6rem;
  margin: 0.3rem 0;
  min-width: 100%;
  box-sizing: border-box;
  font-family: 'Ionicons', sans-serif;
`

InputWithInfo.propTypes = {
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  className: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  infoContent: PropTypes.any,
  inputStyle: PropTypes.object,
  infoContentClassName: PropTypes.string,
  infoContentStyle: PropTypes.object,
  showInfo: PropTypes.bool,
}

InputWithInfo.defaultProps = {
  infoContent: '',
  loading: false,
}

export default InputWithInfo
