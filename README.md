# Svelte Router

## Installation

### npm

```
npm install --save svelte-router // name to be defined
```

### Yarn

```
yarn add svelte-router // name to be defined
```

## Dependencies

- [svelte](https://github.com/sveltejs/svelte) ^3.12.1
- [history](https://github.com/ReactTraining/history): ^4.10.1

## Usage

```svelte
<script>
  // src/components/App.svelte

  import { Router, Route } from 'svelte-router'
  import { createBrowserHistory } from 'history'
  import MyFirstComponent from './MyFirstComponent.svelte'
  import MySecondComponent from './MySecondComponent.svelte'

  const history = createBrowserHistory()
</script>

<Router {history}>
  <Route path="/" component={MyFirstComponent} />
  <Route path="/foo" component={MySecondComponent} />
  <Route path="/bar/baz">
    <h1>Hello World</h1>
    <p>svelte-router is awesome!</p>
  </Route>
</Router>
```

### To navigate somewhere from any component

```svelte
<script>
  import history from './some/path/to/history.js'

  function goToTheMoon() {
    history.push('/moon')
  }
</script>

<h1>Foo bar</h1>

<p>Lorem ipsum</p>

<button on:click={goToTheMoon}>Fly me to the moon!</button>
```
