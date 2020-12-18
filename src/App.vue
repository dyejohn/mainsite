<template>
  <Menu/>
  <router-view>
  </router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from "@/components/Menu";

export default {
  name: 'App',
  components: {
    Menu,
    HelloWorld
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
