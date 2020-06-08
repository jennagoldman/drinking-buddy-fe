import { fetchBeers, createBeer } from "../services/beer-api";

export const ADD_BEER = 'ADD_BEER';
export const addBeer = beer => dispatch => {
  return createBeer(beer)
    .then(createdBeer => {
      dispatch({
        type: ADD_BEER,
        payload: beer
      })
    })
};

export const SET_BEERS = 'SET_BEERS';
export const setBeers = () => dispatch => {
  return fetchBeers()
    .then(beers => {
      dispatch({
        type: SET_BEERS,
        payload: beers
      });
    });
};