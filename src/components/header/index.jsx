import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'


class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }

  render() {
    const { title, className } = this.props
    return <h3 className={className}>{title}</h3>
  }
}


export default styled(Header)`
  user-select: none;
  cursor: default;
`
