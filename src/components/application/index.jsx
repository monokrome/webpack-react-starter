import styles from './styles';

import React from 'react';


export default class ApplicationComponent extends React.Component {
  render() {
    return <h2 className={ styles.title }>Hello, World.</h2>;
  }
}
