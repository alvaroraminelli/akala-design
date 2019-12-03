import { Ref } from '@stardust-ui/react-component-ref'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'

import {
  childrenUtils,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
  createShorthandFactory,
  getElementType,
  getUnhandledProps,
} from '../../lib'

class Button extends Component {

  computeButtonAriaRole(ElementType) {
    const { role } = this.props

    if (!_.isNil(role)) return role
    if (ElementType !== 'button') return 'button'
  }

  computeTabIndex = (ElementType) => {
    const { disabled, tabIndex } = this.props

    if (!_.isNil(tabIndex)) return tabIndex
    if (disabled) return -1
    if (ElementType === 'div') return 0
  }

  computeElementType = () => {
    const { attached, label } = this.props

    if (!_.isNil(attached) || !_.isNil(label)) return 'div'
  }

  handleClick = (e) => {
    const { disabled } = this.props

    if (disabled) {
      e.preventDefault()
      return
    }

    _.invoke(this.props, 'onClick', e, this.props)
  }

  hasIconClass = () => {
    const { labelPosition, children, content, icon } = this.props

    if (icon === true) return true
    return icon && (labelPosition || (childrenUtils.isNil(children) && _.isNil(content)))
  }

  render(){
    const {
      active,
      animated,
      attached,
      basic,
      children,
      circular,
      className,
      color,
      compact,
      content,
      disabled,
      floated,
      fluid,
      icon,
      inverted,
      label,
      labelPosition,
      loading,
      negative,
      positive,
      primary,
      secondary,
      size,
      toggle,
    } = this.props

    const baseClasses = cx(
      color,
      size,
      useKeyOnly(active, 'active'),
      useKeyOnly(basic, 'basic'),
      useKeyOnly(circular, 'circular'),
      useKeyOnly(compact, 'compact'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(this.hasIconClass(), 'icon'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(loading, 'loading'),
      useKeyOnly(negative, 'negative'),
      useKeyOnly(positive, 'positive'),
      useKeyOnly(primary, 'primary'),
      useKeyOnly(secondary, 'secondary'),
      useKeyOnly(toggle, 'toggle'),
      useKeyOrValueAndKey(animated, 'animated'),
      useKeyOrValueAndKey(attached, 'attached'),
    )
    const labeledClasses = cx(useKeyOrValueAndKey(labelPosition || !!label, 'labeled'))
    const wrapperClasses = cx(useKeyOnly(disabled, 'disabled'), useValueAndKey(floated, 'floated'))

    const rest = getUnhandledProps(Button, this.props)
    const ElementType = getElementType(Button, this.props, this.computeElementType)
    const tabIndex = this.computeTabIndex(ElementType)

    const classes = cx('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className)
    const hasChildren = !childrenUtils.isNil(children)
    const role = this.computeButtonAriaRole(ElementType)

    return (
      <Ref innerRef={this.ref}>
        <ElementType
          {...rest}
          className={classes}
          aria-pressed={toggle ? !!active : undefined}
          disabled={(disabled && ElementType === 'button') || undefined}
          onClick={this.handleClick}
          role={role}
          tabIndex={tabIndex}
        >
          {hasChildren && children}
          {/*{!hasChildren && Icon.create(icon, { autoGenerateKey: false })}*/}
          {!hasChildren && content}
        </ElementType>
      </Ref>
    )
  }
}
Button.create = createShorthandFactory(Button, (value) => ({ content: value }))

export default Button
