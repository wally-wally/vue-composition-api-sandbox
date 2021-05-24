<template>
  <div>
    <router-link to="/before">Before</router-link>
    |
    <router-link to="/after">After</router-link>
    <hr />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
});
</script>
