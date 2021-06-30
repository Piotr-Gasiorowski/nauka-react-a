import React from 'react';
import styles from './List.scss';
import Hero from '../Hero.js';

class List extends React.Component {
  render() {
    return (
      <div id="List">
        <section className={styles.component}>
          <h2 className={styles.subtitle}>Nie działa Hero</h2>
          <Hero />
        </section>  
      </div>
    )
  }
}

export default List;
