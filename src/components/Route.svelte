<script>
  import { onMount, onDestroy } from 'svelte'
  import { location, routes } from '../store'
  import { matchPath, parseParameters } from '../path'

  export let name = null
  export let path = null
  export let component = null

  let routeParams = {}

  onMount(() => {
    routes.update(routes => {
      routes.push({ name, path })

      return routes
    })
  })

  onDestroy(() => {
    routes.update(routes => {
      const index = routes.findIndex(route => route.path === path)
      routes.splice(index, 1)

      return routes
    })
  })

  $: if (matchPath($location.pathname, path)) {
    routeParams = parseParameters($location.pathname, path)
  }
</script>

{#if matchPath($location.pathname, path) }
  {#if component !== null }
    <svelte:component this={component} {routeParams} />
  {:else}
    <slot></slot>
  {/if}
{/if}
