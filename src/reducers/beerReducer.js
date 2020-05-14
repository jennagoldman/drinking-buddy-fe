import { ADD_BEER, SET_BEERS } from '../actions/beerActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_BEER:
      return [...state, action.payload];
    case SET_BEERS:
      return action.payload;
    default:
      return state;
  }
}