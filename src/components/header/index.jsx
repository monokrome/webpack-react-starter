import PropTypes from 'prop-types'
import React from 'react'

import styled from 'styled-components'

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }

  render() {
    const {className, title} = this.props
    return <h3 className={className}>{title}</h3>
  }
}

export default styled(Header)`
  margin: calc(50vh - 0.8em) auto 0;
  width: 2.5ex;
  height: 0.6em;
  line-height: 0.9em;
  background-color: #090939;
  color: #fff;
  overflow: hidden;
  font-size: 8rem;
  text-align: center;
  border-radius: 1rem 0 1rem 0;
`
