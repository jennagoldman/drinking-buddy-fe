import React, { useState } from 'react';
import { createBeer } from '../services/beer-api';

const BeerForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [abv, setAbv] = useState(0);
  const [ibu, setIbu] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    // send backend a post request to create beer
    createBeer({ name, description, imageUrl, abv, ibu })
      .then(beer => {
    // once receive a response, add beer to redux
      })

  }
  return (
    <form onSubmit={}>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Beer name" />
      <textarea value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Beer description" />
      <input type="text" value={imageUrl} onChange={({ target }) => setImageUrl(target.value)} placeholder="Image URL" />
      <input type="number" min="1" max="100" value={abv} onChange={({ target }) => setAbv(target.value)} placeholder="ABV" />
      <input type="number" min="5" max="120" value={ibu} onChange={({ target }) => setIbu(target.value)} placeholder="IBU" />
    </form>
  )
};

export default BeerForm;