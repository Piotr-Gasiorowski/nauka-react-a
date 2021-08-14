import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';

const Container = props => (
  <div className = {styles.components}>{props.children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;