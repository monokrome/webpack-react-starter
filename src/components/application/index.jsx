import React from 'react';
import styles from './styles';


export default class ApplicationComponent extends React.Component {
  render() {
    return <h2 className={ styles.title }>Hello, World.</h2>;
  }
}
