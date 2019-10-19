<script>
  import { derived } from 'svelte/store'
  import link from '../link'
  import { routes } from '../store'
  import { compileParameters } from '../path'

  export let name = null
  export let params = {}
  export let href = null

  let path = derived(routes, routes => {
    if (href !== null) {
      return href
    }

    const index = routes.findIndex(route => route.name === name)

    if (index === -1) {
      return null
    }

    return compileParameters(routes[index].path, params)
  })
</script>

<a href={$path} use:link>
  <slot></slot>
</a>
