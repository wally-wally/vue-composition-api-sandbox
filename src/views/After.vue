<template>
  <section>
    <h2>After</h2>

    <Todo />

    <Comment />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "@/components/Todo.vue";
import Comment from "@/components/Comment.vue";

export default Vue.extend({
  name: "After",
  components: {
    Todo,
    Comment,
  },
});
</script>

<style lang="scss" scoped>
article {
  & + & {
    margin-top: 40px;
  }
}
</style>
