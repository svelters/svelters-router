<script>
  import { onMount, onDestroy } from 'svelte'
  import history from '../history'
  import { location } from '../store'

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
