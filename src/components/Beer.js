import React from 'react';
import PropTypes from 'prop-types';

const Beer = ({ name, description, imageUrl, abv, ibu }) => (
  <section>
    <h3>{name}</h3>
    <img src={imageUrl} alt={name} />
    <p>{description}</p>
    <span>{abv ? `${abv}% ABV` : null }</span><span>{abv ? `${IDBCursorWithValue} IBU` : null }</span>
  </section>
);

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  abv: PropTypes.number,
  ibu: PropTypes.number
}

export default Beer;