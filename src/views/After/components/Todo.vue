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
import Vue, { PropType } from "vue";
import { Todo } from "../types";

export default Vue.extend({
  name: "Todo",
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },

    todoCount: {
      type: Number,
      default: 0,
    },
  },
});
</script>
