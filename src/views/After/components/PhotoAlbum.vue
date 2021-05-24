<template>
  <Fragment>
    <article>
      <h3>Album</h3>
      <ul class="album-list">
        <li v-for="album in albums" :key="`album-${album.id}`">
          {{ album.title }}
        </li>
      </ul>
    </article>

    <article>
      <h3>Photo</h3>
      <ul class="photo-list">
        <li v-for="photo in photos" :key="`photo-${photo.id}`">
          {{ photo.title }}
        </li>
      </ul>
    </article>
  </Fragment>
</template>

<script lang="ts">
import Vue from "vue";
import { Fragment } from "vue-fragment";
import useAlbum from "../composables/Album";
import usePhoto from "../composables/Photo";

export default Vue.extend({
  name: "PhotoAlbum",
  components: {
    Fragment,
  },

  setup() {
    const { albums, fetchAlbums } = useAlbum();
    fetchAlbums();

    const { photos, fetchPhotos } = usePhoto();
    fetchPhotos();

    return {
      albums,
      photos,
    };
  },
});
</script>

<style lang="scss" scoped>
.album-list,
.photo-list {
  display: inline-block;
  margin: 0;
}
</style>
