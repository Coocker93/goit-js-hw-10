const apiKey = 'live_7W9qR1S1NEbORygBn1mx1mH1oce6c0s9E5IsuO3hszsB8xwaLqQO2IpjD7PskyDa';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  
  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      throw new Error(error.message);
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  
  return fetch(url, {
    headers: {
      'x-api-key': apiKey
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      throw new Error(error.message);
    });
}
