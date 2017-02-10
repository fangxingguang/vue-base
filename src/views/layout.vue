<template>
  <div class="layout">
    <h1>{{ msg }}</h1>
    <router-link to="/">Go to index</router-link>
    <router-link to="/index2">Go to index2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: 'this is layout'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
