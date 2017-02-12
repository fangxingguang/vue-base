<template>
  <div class="layout">
    <h1>{{ msg }}</h1>
    路由测试：
    <router-link to="/">首页</router-link>
    <router-link to="/index2">第二页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      msg: '我是布局模版'
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
