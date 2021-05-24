<template>
  <section>
    <h2>After</h2>

    <Todo />

    <Comment />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "./components/Todo.vue";
import Comment from "./components/Comment.vue";
import useTodo from "./composables/Todo";
import useComment from "./composables/Comment";

export default Vue.extend({
  name: "After",
  components: {
    Todo,
    Comment,
  },

  setup() {
    const { todos, todoCount, fetchTodos } = useTodo();
    const { comments, showComment } = useComment();

    fetchTodos();

    return {
      todos,
      todoCount,
      comments,
      showComment,
    };
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
