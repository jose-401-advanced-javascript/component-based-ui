import React from 'react';
import PropTypes from 'prop-types';

const Character = (img, name, species) => (
  <dl>
    <dt>Name</dt>
    <dd>{name}</dd>

    <dt>Image</dt>
    <dd>{img}</dd>

    <dt>Species</dt>
    <dd>{species}</dd>


  </dl>
);

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
