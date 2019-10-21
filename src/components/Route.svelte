<script>
  import { onDestroy } from 'svelte'
  import { location, registerRoute, unregisterRoute } from '../store'
  import { matchPath, parseParameters } from '../path'

  export let path
  export let name = null
  export let component = null

  let routeParams = {}

  registerRoute({ name, path, component })

  onDestroy(() => {
    unregisterRoute({ name, path, component })
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
