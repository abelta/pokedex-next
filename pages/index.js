import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pokemonIndexRequested } from '../actions';

class Home extends Component {
  static getInitialProps({ store }) {
    store.dispatch(pokemonIndexRequested());
  }

  render() {
    const { pokemonIndex } = this.props;
    return (
      <div>
        <h1>HOME!!!</h1>
        {pokemonIndex.map(p => (
          <div>{p.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

// export default withReduxSaga(Home);
export default connect(mapStateToProps)(Home);
