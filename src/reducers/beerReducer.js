import { ADD_BEER } from '../actions/beerActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_BEER:
      return [...state, action.payload]
    default:
      return state;
  }
}