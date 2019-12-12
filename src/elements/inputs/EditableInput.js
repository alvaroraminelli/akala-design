import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import cx from 'classnames'

import { Button } from '../Button'

import c from '../styles/variables'
import { flex, flexAuto, flexGrow, flexCenter } from '../styles/layout'

class EditableInput extends Component {
  state = {
    isEdited: this.props.isEdited || false,
    value: this.props.value,
  }

  componentDidMount () {
    if (this.props.isEdited) {
      this.addListener()
    }
  }

  componentWillReceiveProps (nextProps) {
    const nextValue = nextProps.value
    const currentValue = this.props.value

    if (nextValue !== currentValue) {
      this.setState({ value: nextValue })
    }
    if ([true, false].includes(nextProps.isEdited) && nextProps.isEdited !== this.state.isEdited) {
      this.setState({ isEdited: nextProps.isEdited })
    }
  }

  componentWillUnmount () {
    this.removeListener()
  }

  addListener () {
    document.addEventListener('click', this.handleClick)
  }

  removeListener () {
    document.removeEventListener('click', this.handleClick)
  }

  handleClick = e => {
    const { isEdited } = this.state

    if (isEdited && this._input && this._input.contains && !this._input.contains(e.target)) {
      this.cancelEditing()
    }
  }

  onClick = () => {
    const { onEnterEdit } = this.props

    if (onEnterEdit) {
      onEnterEdit()
    }
    this.setState({ isEdited: true })
    this.addListener()
  }

  cancelEditing () {
    const { onLeaveEdit } = this.props

    this.setState({ value: this.props.value, isEdited: false }, () => {
      if (onLeaveEdit) {
        onLeaveEdit()
      }
    })
    this.removeListener()
  }

  onChange (e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()

    const { validate, submit, onLeaveEdit } = this.props
    const value = (this.state.value && this.state.value.trim()) || this.state.value

    if (validate && !validate(value)) {
      this.cancelEditing()
    } else {
      this.setState({ isEdited: false, value })
      submit(value)
    }
    if (onLeaveEdit) {
      onLeaveEdit()
    }
    this.removeListener()
  }

  keyDown (e) {
    if (e.keyCode === 27) {
      e.stopPropagation()
      this.cancelEditing()
    }
  }

  render () {
    const { isEdited, value } = this.state
    const {
      linkUrl,
      fullSize,
      isDisabled,
      isLoading,
      defaultStyle,
      disabledStyle,
      editableStyle,
      editedStyle,
      placeholder,
      defaultValue,
      noHint,
      isActivated,
    } = this.props

    if (isDisabled) {
      return (
        <DisabledContainer className={cx(defaultStyle, disabledStyle)}>
          {linkUrl ? (
            <Link className='flex flex-center' to={linkUrl} title={value}>
              {value || defaultValue}
            </Link>
          ) : (
            <span>{value || defaultValue}</span>
          )}
        </DisabledContainer>
      )
    } else if (isEdited) {
      return (
        <Container
          edited
          className={cx(defaultStyle, editedStyle)}
          ref={node => (this._input = node)}
        >
          <FlexForm onSubmit={this.handleSubmit}>
            <EditedInput
              type='text'
              value={value || ''}
              autoFocus='autofocus'
              placeholder={placeholder}
              onChange={this.onChange}
              onKeyDown={this.keyDown}
            />
          </FlexForm>
        </Container>
      )
    }

    return (
      <Container className={cx(defaultStyle, editableStyle)}>
        <Editable>
          <div className={cx('flex overflow-hidden', { 'flex-auto': fullSize })}>
            {linkUrl ? (
              <Link
                className={cx('ellipsis', 'flex', 'flex-center', { 'c-grey-400': !isActivated })}
                to={linkUrl}
                title={value}
              >
                {value || defaultValue}
              </Link>
            ) : (
              <span className={cx('ellipsis', { 'c-grey-400': !isActivated })}>
                {value || defaultValue}
              </span>
            )}
          </div>

          <Button
            type='icon'
            className={noHint ? '' : 'hint--top'}
            ariaLabel='Edit'
            isLoading={isLoading}
            onClick={this.onClick}
          >
            <i className='ion-md-create' />
          </Button>
        </Editable>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 34px;
  border-bottom: 1px solid ${props => (props.edited ? c.blue500 : 'transparent')};
`
const DisabledContainer = styled(Container)`
  ${flexCenter};
`

const Editable = styled.div`
  ${flex} ${flexAuto} ${flexCenter};
`

const EditedInput = styled.input`
  border: none;
  outline: none;
  ${flexGrow};
`

const FlexForm = styled.form`
  ${flex} ${flexAuto} border: none;
`

EditableInput.propTypes = {
  noHint: PropTypes.bool,
  fullSize: PropTypes.bool,
  isEdited: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isActivated: PropTypes.bool,

  value: PropTypes.string,
  defaultValue: PropTypes.string,
  editedStyle: PropTypes.string,
  placeholder: PropTypes.string,
  defaultStyle: PropTypes.string,
  disabledStyle: PropTypes.string,
  editableStyle: PropTypes.string,
  linkUrl: PropTypes.string,

  validate: PropTypes.func,
  onEnterEdit: PropTypes.func,
  onLeaveEdit: PropTypes.func,
  submit: PropTypes.func.isRequired,
}

EditableInput.defaultProps = {
  isActivated: true,
}

export default EditableInput
