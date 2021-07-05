import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <div id="List">
        <section className={styles.component}>
          <Hero titleText={this.props.title} image={image} />
          <div className={styles.descrition}>
            {this.props.children}
          </div>
          <div className={styles.columns}>Animals</div>
          <div className={styles.columns}>Plants</div>
          <div className={styles.columns}>Minerals</div>
        </section>  
      </div>
    )
  }
}

export default List;