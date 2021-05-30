<template>
  <header>
    <router-link to="/before">Before</router-link>
    |
    <router-link to="/after">After</router-link>
    |
    <router-link to="/templateref">TemplateRef</router-link>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
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
</style>
