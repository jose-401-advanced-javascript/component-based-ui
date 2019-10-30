import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default class Character extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  };

  render() {
    const { img, species, name } = this.props;

    return (
      <dl  className={styles.Character}>
        <dt>Name</dt>
        <dd>{name}</dd>
  
        <dt>Image</dt>
        <img src={img} alt={name} />
  
        <dt>Species</dt>
        <dd>{species}</dd>
      </dl>
    );
  }
}
