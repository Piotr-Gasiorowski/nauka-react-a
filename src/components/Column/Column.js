import React from 'react';
import styles from './Column.scss';

class Column extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h3 className={styles.title}>My first React app</h3>
      </main>
    )
  }
}

export default Column;