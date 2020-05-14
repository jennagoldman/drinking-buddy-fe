import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBeers } from '../services/beer-api';
import { setBeers } from '../actions/beerActions';

const BeerList = () => {
  const dispatch = useDispatch();

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

  return (
    <ul>
      <li>this is a list</li>
    </ul>
  )
};

export default BeerList;