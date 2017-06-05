import PropTypes from 'prop-types'
import React from 'react'

export default class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title } = this.props
    return <h3>{title}</h3>
  }
}
