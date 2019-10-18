# Svelters Router

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

### Declare route with Route component

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

### Declare route programmatically

```svelte
<script>
  import { Router, Route } from 'svelters-router'
  import Home from './Home.svelte'
  import Users from './Users.svelte'
  import User from './User.svelte'

  let routes = [
    {
        path: "/users",
        component: Users
    },
    {
        path: "/users/:id",
        component: User
    }
  ]
</script>

<Router {routes}>
  <Route path="/" component={Home} />
</Router>
```

:bulb: Note that you can combine the two ways of declaring routes.

### Get route parameters in component

Route parameters are compiled by `svelters-router` and given to defined component through a prop named `routeParams`.

#### Your Router:

```svelte
<script>
  import { Router, Route } from 'svelters-router'
  import Home from './Profile.svelte'
</script>

<Router>
  <Route path="/organization/:organizationId/members/:memberId" component={Profile} />
</Router>
```

#### Your component `Profile.svelte`:

```svelte
<script>
  export let routeParams

  const { organizationId, memberId } = routeParams
</script>

<ul>
  <li>Organization ID: {organizationId}</li>
  <li>Member ID: {memberId}</li>
</ul>

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
