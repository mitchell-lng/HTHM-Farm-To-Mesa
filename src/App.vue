<template>
  <div id="app container">
    <navbar></navbar>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import navbar from '@/components/nav.vue'
import foot from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    foot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
