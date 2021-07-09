import React from 'react';
import styles from './Column.scss';

class Column extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </main>
    )
  }
}

export default Column;