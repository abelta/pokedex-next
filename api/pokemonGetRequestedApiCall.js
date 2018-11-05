import 'isomorphic-fetch';

const pokemonGetRequestedApiCall = id =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(response => response.json());

export default pokemonGetRequestedApiCall;
