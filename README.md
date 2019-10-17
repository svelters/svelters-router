# Svelte Router

## Installation

### npm

```
npm install --save svelters-router
```

### Yarn

```
yarn add svelters-router
```


## Usage

```svelte
<script>
  import { Router, Route } from 'svelters-router'
  import Home from './Home.svelte'
  import Users from './Users.svelte'
  import User from './User.svelte'
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/users" component={Users} />
  <Route path="/users/:id" component={User} />
  <Route path="/how-to">
    <h1>Hi!</h1>
    <p>Routes can also have child content!</p>
  </Route>
</Router>
```

### Links

```svelte
<script>
  import { link } from 'svelters-router'
</script>

<p>I wonder how simple it is to create a link ?</p>

<a href="/some/path" use:link>Just click here!</a>
```

### To navigate somewhere programmatically

```svelte
<script>
  import { push } from 'svelters-router'

  function goToTheMoon() {
    // Prepare the ship
    // ...

    push('/moon')
  }
</script>

<p>I'm a rocket man!</p>

<button on:click={goToTheMoon}>Fly me to the moon!</button>
```
