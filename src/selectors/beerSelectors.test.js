import { getBeers } from './beerSelectors';

describe('beers selectors', () => {
  it('selects all beers from state', () => {
    const state = {
      beers: [
        {
          _id: '5ebcc6bd2eae6c615606e7ba',
          name: 'Jammy Pants',
          description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pantfulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
          imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
          abv: 7,
          ibu: 5  
        },
        {
          _id: '5ebcda8c2eae6c615606e7bb',
          name: 'Blueberry Cobbler Muffin',
          description: 'Brewed in collaboration with our friends at Southern Grist, Blueberry Cobbler Muffin is a hybrid of two of our favorite beers: GN\'s Blueberry Muffin and SG\'s Blueberry Cobbler. *contains milk sugar',
          imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-3433561_a8a2a_sm.jpeg',
          abv: 6,
          ibu: 5  
        },
      ]
    };

    const beers = getBeers(state);

    expect(beers).toEqual([
      {
        _id: '5ebcc6bd2eae6c615606e7ba',
        name: 'Jammy Pants',
        description: 'An ode to all the parents out there and our love of fruit beers. This kettle sour was fermented with \'pantfulls\' of marionberry, boysenberry and blueberry puree. Drink up now because it\'s time to get your Jammy Pants on!',
        imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-2630231_7e4fd_sm.jpeg',
        abv: 7,
        ibu: 5  
      },
      {
        _id: '5ebcda8c2eae6c615606e7bb',
        name: 'Blueberry Cobbler Muffin',
        description: 'Brewed in collaboration with our friends at Southern Grist, Blueberry Cobbler Muffin is a hybrid of two of our favorite beers: GN\'s Blueberry Muffin and SG\'s Blueberry Cobbler. *contains milk sugar',
        imageUrl: 'https://untappd.akamaized.net/site/beer_logos/beer-3433561_a8a2a_sm.jpeg',
        abv: 6,
        ibu: 5  
      }
    ])
  })
})