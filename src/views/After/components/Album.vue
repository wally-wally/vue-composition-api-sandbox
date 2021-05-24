<template>
  <article>
    <h3>Album</h3>
    <ul class="album-list">
      <li v-for="album in albums" :key="`album-${album.id}`">
        {{ album.title }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Album } from "../types";

export default Vue.extend({
  name: "Album",
  props: {
    albums: {
      type: Array as PropType<Album[]>,
      default: () => [],
    },
  },
});
</script>
