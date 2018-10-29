import React, { Component } from 'react'
import classNames from 'classnames/bind';

class Button extends Component {
  render() {
    const buttonClass = classNames({
      button: true,
      'is-primary': this.props.primary,
      'is-link': this.props.link,
      'is-info': this.props.info,
      'is-success': this.props.success,
      'is-warning': this.props.warning,
      'is-danger': this.props.danger
    });
    return (
      <button className={buttonClass}>Button</button>  
    )
  }
}

export default Button;