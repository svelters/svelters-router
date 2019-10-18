<script>
  import Route from './Route.svelte'
  import { location } from '../store'

  export let routes = []

  location.update(() => window.location)
</script>

{#each routes as route}
  <Route
    component={route.component}
    name={route.name}
    path={route.path}
  />
{/each}
<slot></slot>
