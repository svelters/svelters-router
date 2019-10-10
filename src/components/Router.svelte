<script>
  import { setContext, onMount, onDestroy } from 'svelte'
  import { location } from '../store.js'

  export let history

  let unlistenHistory = null

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
</script>

<slot></slot>
