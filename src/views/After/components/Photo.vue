<template>
  <article>
    <h3>Photo</h3>
    <ul class="photo-list">
      <li v-for="photo in photos" :key="`photo-${photo.id}`">
        {{ photo.title }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Photo } from "../types";

export default Vue.extend({
  name: "Photo",
  props: {
    photos: {
      type: Array as PropType<Photo[]>,
      default: () => [],
    },
  },
});
</script>
