import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { pokemonGetFailed, pokemonGetSucceeded } from '../actions';
import { pokemonGetRequestedApiCall } from '../api';

const pokemonGetRequested = function* pokemonGetRequested(action) {
  const { id } = action.payload;
  try {
    const pokemon = yield call(pokemonGetRequestedApiCall, id);
    yield put(pokemonGetSucceeded({ pokemon }));
  } catch (e) {
    yield put(pokemonGetFailed());
  }
};

const pokemonGetRequestedSaga = function* pokemonGetRequestedSaga() {
  yield takeLatest(types.POKEMON_GET_REQUESTED, pokemonGetRequested);
};

export default pokemonGetRequestedSaga;
