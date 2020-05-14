import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBeer } from '../services/beer-api';
import { addBeer } from '../actions/beerActions';

const BeerForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [abv, setAbv] = useState(0);
  const [ibu, setIbu] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addHabit({ name, description, imageUrl, abv, ibu }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Beer name" />
      <textarea value={description} onChange={({ target }) => setDescription(target.value)} placeholder="Beer description" />
      <input type="text" value={imageUrl} onChange={({ target }) => setImageUrl(target.value)} placeholder="Image URL" />
      <input type="number" min="1" max="100" value={abv} onChange={({ target }) => setAbv(target.value)} placeholder="ABV" />
      <input type="number" min="5" max="120" value={ibu} onChange={({ target }) => setIbu(target.value)} placeholder="IBU" />
      <button>Add Beer</button>
    </form>
  )
};

export default BeerForm;