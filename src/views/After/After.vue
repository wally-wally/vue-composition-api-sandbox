<template>
  <section>
    <h2>After</h2>

    <Todo />

    <Comment />

    <PhotoAlbum />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "./components/Todo.vue";
import Comment from "./components/Comment.vue";
import PhotoAlbum from "./components/PhotoAlbum.vue";

export default Vue.extend({
  name: "After",
  components: {
    Todo,
    Comment,
    PhotoAlbum,
  },
});
</script>
