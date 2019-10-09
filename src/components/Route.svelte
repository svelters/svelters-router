<script>
  import { getContext, onDestroy } from 'svelte'
  import { ROUTER } from '../context.js'
  import { location } from '../store.js'

  export let path = null
  export let component = null

  const { registerRoute, unregisterRoute } = getContext(ROUTER)

  const route = { path }

  registerRoute(route)

  onDestroy(() => {
    unregisterRoute(route)
  })
</script>

{#if path === $location.pathname }
  {#if component !== null }
    <svelte:component this={component} />
  {:else}
    <slot></slot>
  {/if}
{/if}
