<script>
  import { location } from '../store'

  location.update(() => window.location)
</script>

<slot></slot>
