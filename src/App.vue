<template>
  <div id="app">
    <AddClient />
  </div>
</template>

<script>
import AddClient from '@/components/AddClient'
export default {
  name: 'App',
  components: {
    AddClient
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
