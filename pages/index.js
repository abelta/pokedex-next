import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pokemonIndexRequested } from '../actions';

class Home extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(pokemonIndexRequested());
  }

  render() {
    const { pokemonIndex } = this.props;
    return (
      <div>
        <h1>HOME!!!</h1>
        {pokemonIndex.map(p => (
          <div key={p.name}>{p.name}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Home);
