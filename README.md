# POKEDEX - NEXT

This is a project to showcase Next with Redux and Sagas making API calls and having those calls integrated in a full sagas data flow.

## Making sagas work with Next.js

It's about blocking vs non-blocking.

A page can trigger execution of a saga with an action from its getInitialProps method like so:

```
class Home extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(pokemonIndexRequested());
  }

  render() {
    ...
  }
}
```

**Must be an async function**

The server will wait for execution of the saga and all related sagas and actions before it renders the page with one condition: sagas effect must be [blocking or at least attached](https://redux-saga.js.org/docs/api/#blocking--non-blocking).

In some cases this can mean substituting `spawn` (detached effect) for `fork` (attached effect).

## Run the project

1. yarn
2. yarn dev
3. visit project at localhost:3000
