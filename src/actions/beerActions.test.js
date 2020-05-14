import { addBeer, ADD_BEER, setBeers, SET_BEERS } from './beerActions';

describe('beers actions', () => {
  it('creates a ADD_BEER action', () => {
    const action = addBeer({
      _id: '1234567',
      name: 'Jammy Pants',
      description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
      imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
      abv: 7
    })

    expect(action).toEqual({
      type: ADD_BEER,
      payload: {
        _id: '1234567',
        name: 'Jammy Pants',
        description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
        imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
        abv: 7
      }
    })
  })
  // it('creates a SET_BEERS action', () => {
  //   const action = setBeers([
  //     {
  //       _id: '1234567',
  //       name: 'Jammy Pants',
  //       description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
  //       imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
  //       abv: 7
  //     }
  //   ]);

  //   expect(action).toEqual({
  //     type: SET_BEERS,
  //     payload: [
  //       {
  //         _id: '1234567',
  //         name: 'Jammy Pants',
  //         description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pant-fulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
  //         imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
  //         abv: 7
  //       }
  //     ]
  //   })
  // })
})