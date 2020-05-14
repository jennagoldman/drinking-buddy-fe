import { addBeer, setBeers } from '../actions/beerActions';
import reducer from './beerReducer';

describe('beer reducer', () => {
  it('handles the ADD_BEER action', () => {
    const state = [];
    const action = addBeer({
      _id: '1234567',
      name: 'Jammy Pants',
      description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
      imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
      abv: 7
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: '1234567',
        name: 'Jammy Pants',
        description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
        imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
        abv: 7
      }
    ]);
  });

  it('handles the SET_BEERS action', () => {
    const state = [];
    const action = setBeers([
      {
        _id: '1234567',
        name: 'Jammy Pants',
        description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
        imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
        abv: 7
      }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: '1234567',
        name: 'Jammy Pants',
        description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
        imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
        abv: 7
      }
    ])
  })
});