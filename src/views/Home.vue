<template>
  <div class="home">
    <GoogleMap/>
  </div>
</template>

<script>
// @ is an alias to /src
import GoogleMap from '@/components/GoogleMap'
export default {
  name: 'Home',
  components: {
GoogleMap
  }
}
</script>
