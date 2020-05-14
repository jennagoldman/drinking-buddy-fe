
export const ADD_BEER = 'ADD_BEER';
export const addBeer = beer => ({
  type: ADD_BEER,
  payload: beer
});

export const SET_BEERS = 'SET_BEERS';
export const setBeers = beers => ({
  type: SET_BEERS,
  payload: beers
});