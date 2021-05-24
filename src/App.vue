<template>
  <div>
    <header>
      <router-link to="/before">Before</router-link>
      |
      <router-link to="/after">After</router-link>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

main {
  padding-top: 30px;
  width: 90%;
  margin: 0 auto;
}
</style>
