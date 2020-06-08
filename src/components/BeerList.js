import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBeers } from '../actions/beerActions';
import { getBeers } from '../selectors/beerSelectors';
import Beer from './Beer';

const BeerList = () => {
  const dispatch = useDispatch();

  const beers = useSelector(getBeers);
  useEffect(() => {
    dispatch(setBeers());
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