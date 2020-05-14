export const createBeer = beer => {
  return fetch(`${process.env.API_URL}/api/v1/beers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(beer)
  })
  .then(res => res.json());
}