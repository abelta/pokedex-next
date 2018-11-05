import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pokemonIndexRequestedApiCall } from '../api';
import { pokemonIndexSucceeded, pokemonIndexRequested } from '../actions';

class Home extends Component {
  static getInitialProps({ req, query, store }) {
    // store.dispatch(pokemonIndexRequested());
    // store.dispatch(restaurantsGetSent());
    // const user = req && req.session ? req.session.decodedToken : null
    // // don't fetch anything from firebase if the user is not found
    // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
    // const restaurants = await req.firebaseServer.firestore().collection('restaurants').get();
    // const messages = snap && snap.val()
    // return { user, messages, restaurants: restaurants.docs.map(doc => doc.data()) }
    // return { pokemon: ['pikachu', 'bulbasaur'] };
    store.dispatch(pokemonIndexRequested());
    // const pokemonIndex = await pokemonIndexRequestedApiCall();
    // console.log(store.sagaTask);
    // console.log('··························');
    // console.log(store.sagaTask.constructor.name);
    // console.log(store.sagaTask.done);
    const pokemonIndex = [{ name: 'pikachu' }, { name: 'bulbasaur' }, { name: 'charmander' }];
    // return await store.sagaTask.done.then(() => {
    //   console.log('DONE!!!!!!');
    //   return { pokemonIndex };
    // });
    // store.sagaTask.done().then(() => console.log('TERMINADO!!'));
    store.dispatch(pokemonIndexSucceeded({ pokemon: pokemonIndex }));
    // return { pokemonIndex };
  }

  render() {
    return (
      <div>
        <h1>HOME!!!</h1>
        {this.props.pokemonIndex.map(p => (
          <div>{p.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

// export default withReduxSaga(Home);
export default connect(mapStateToProps)(Home);
