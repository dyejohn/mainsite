<template>
  <div class="menu-bar">
    <router-link to="/" tag="div" class="menu-item" >Home</router-link>
    | <div class="menu-item">Contact</div>
    | <div class="menu-item"><router-link to="/Projects">Projects</router-link></div>
  </div>
</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>
.menu-bar {
  float: right;
}

.menu-item {
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  float: left;
}
</style>