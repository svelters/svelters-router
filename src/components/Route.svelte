<script>
  import { location } from '../store.js'
  import { matchPath, parseParameters } from '../utils.js'

  export let path = null
  export let component = null

  let routeParams = {}

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
