import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from '../services/beer-api';
import { setBeers } from '../actions/beerActions';
import { getBeers } from '../selectors/beerSelectors';
import Beer from './Beer';

const BeerList = () => {
  const dispatch = useDispatch();

  const beers = useSelector(getBeers);
  useEffect(() => {
    //fetch all beers from server
    fetchBeers()
      .then(beers => {
      //store all beers in redux
        dispatch(setBeers(beers));
      })
  }, []);

  //get all beers from redux

  //create DOM for beers and render
  const beerElements = beers.map(beer => (
    <li key={beer._id}>
      <Beer {...beer} />
    </li>
  ));

  return (
    <ul>
      {beerElements}
    </ul>
  )
};

export default BeerList;