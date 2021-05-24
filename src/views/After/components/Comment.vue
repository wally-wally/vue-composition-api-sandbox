<template>
  <article>
    <h3>Comments</h3>
    <ul class="comment-list">
      <li
        v-for="comment in comments"
        :key="`comment-${comment.id}`"
        class="comment-list-item"
        @click="showComment(comment)"
      >
        {{ comment.name }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import useComment from "../composables/Comment";

export default Vue.extend({
  name: "Comment",

  setup() {
    const { comments, showComment } = useComment();

    return {
      comments,
      showComment,
    };
  },
});
</script>

<style lang="scss" scoped>
.comment-list {
  display: inline-block;
  margin: 0;
}

.comment-list-item {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
