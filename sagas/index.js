import { fork } from 'redux-saga/effects';
import pokemonGet from './pokemonGet';
import pokemonIndex from './pokemonIndex';

const saga = function* saga() {
  yield fork(pokemonGet);
  yield fork(pokemonIndex);
};

export default saga;
