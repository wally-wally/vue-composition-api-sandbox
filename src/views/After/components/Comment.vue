<template>
  <article>
    <h3>Comments</h3>
    <ul class="comment-list">
      <li
        v-for="comment in comments"
        :key="`comment-${comment.id}`"
        class="comment-list-item"
        @click="clickComment(comment)"
      >
        {{ comment.name }}
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Comment } from "../types";

export default Vue.extend({
  name: "Comment",
  props: {
    comments: {
      type: Array as PropType<Comment[]>,
      default: () => [],
    },
  },

  methods: {
    clickComment(comment: Comment) {
      this.$emit("click-comment", comment);
    },
  },
});
</script>

<style lang="scss" scoped>
.comment-list-item {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
