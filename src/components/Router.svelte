<script>
  import Route from './Route.svelte'
  import { location } from '../store'

  export let routes = []

  location.update(() => window.location)
</script>

{#each routes as route}
  <Route path={route.path} component={route.component} />
{/each}
<slot></slot>
