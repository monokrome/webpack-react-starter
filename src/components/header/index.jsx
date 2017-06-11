import PropTypes from 'prop-types'
import React from 'react'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { className, title } = this.props
    return <h3 className={className}>{title}</h3>
  }
}

export default Header
