<script>
  import { setContext, onMount, onDestroy } from 'svelte'
  import { ROUTER } from '../context.js'
  import { location } from '../store.js'

  export let history

  let unlistenHistory = null
  let routes = []

  location.update(() => history.location)

  onMount(() => {
    unlistenHistory = history.listen(historyLocation => {
      location.update(() => historyLocation)
    })
  })

  onDestroy(() => {
    if (unlistenHistory) {
      unlistenHistory()
    }
  })

  function registerRoute(route) {
    routes.push(route)
  }

  function unregisterRoute(route) {
    const index = routes.indexOf(route)
    routes.splice(index, 1)
    return routes
  }

  setContext(ROUTER, {
    registerRoute,
    unregisterRoute
  })
</script>

<slot></slot>
