<template>
  <article>
    <h3>
      Todos <span v-if="!!todoCount">({{ todoCount }}개)</span>
    </h3>
    <ul class="todo-list">
      <li v-for="todo in todos" :key="`todo-${todo.id}`">{{ todo.title }}</li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import useTodo from "../composables/Todo";

export default Vue.extend({
  name: "Todo",

  setup() {
    const { todos, todoCount, fetchTodos } = useTodo();

    fetchTodos();

    return {
      todos,
      todoCount,
    };
  },
});
</script>

<style lang="scss" scoped>
.todo-list {
  display: inline-block;
  margin: 0;
}
</style>
