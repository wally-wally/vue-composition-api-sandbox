<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: { Header },
});
</script>

<style lang="scss" scoped>
main {
  padding-top: 30px;
  width: 90%;
  margin: 0 auto;
}
</style>
