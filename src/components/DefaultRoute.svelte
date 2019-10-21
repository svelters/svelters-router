<script>
  import { matchAny } from '../path'
  import { location, routes } from '../store'

  export let component = null
</script>

{#if !matchAny($location.pathname, $routes) }
  {#if component !== null }
    <svelte:component this={component} />
  {:else}
    <slot></slot>
  {/if}
{/if}
