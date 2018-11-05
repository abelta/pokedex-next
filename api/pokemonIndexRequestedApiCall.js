import 'isomorphic-fetch';

const pokemonIndexRequestedApiCall = () =>
  // fetch('https://pokeapi.co/api/v2/pokemon?limit=60/')
  fetch('http://pokeapi.salestock.net/api/v2/pokemon?limit=60/')
    .then(response => response.json())
    .then(response => response.results);

export default pokemonIndexRequestedApiCall;
