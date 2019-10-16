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


## Usage

```svelte
<script>
  import { Router, Route } from 'svelte-router'
  import MyFirstComponent from './MyFirstComponent.svelte'
  import MySecondComponent from './MySecondComponent.svelte'
</script>

<Router>
  <Route path="/" component={MyFirstComponent} />
  <Route path="/foo" component={MySecondComponent} />
  <Route path="/bar/baz">
    <h1>Hello World</h1>
    <p>svelte-router is awesome!</p>
  </Route>
</Router>
```

### Links

```svelte
<script>
  import { link } from 'svelte-router'
</script>

<p>I wonder how simple it is to create a link ?</p>

<a href="/some/path" use:link>Just click here!</a>
```

### To navigate somewhere programmatically

```svelte
<script>
  import { push } from 'svelte-router'

  function goToTheMoon() {
    // Prepare the ship
    // ...

    push('/moon')
  }
</script>

<p>I'm a rocket man!</p>

<button on:click={goToTheMoon}>Fly me to the moon!</button>
```
