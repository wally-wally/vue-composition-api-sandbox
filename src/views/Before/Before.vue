<template>
  <section>
    <h2>Before</h2>

    <article>
      <h3>
        Todos <span v-if="!!todoCount">({{ todoCount }}개)</span>
      </h3>
      <ul class="todo-list">
        <li v-for="todo in todos" :key="`todo-${todo.id}`">
          {{ todo.title }}
        </li>
      </ul>
    </article>

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
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Todo, Comment } from "./types";

export default Vue.extend({
  name: "Before",
  data() {
    return {
      todos: [] as Todo[],
      comments: [] as Comment[],
    };
  },

  computed: {
    todoCount(): number {
      return this.todos.length;
    },
  },

  created() {
    this.fetchTodos();
  },

  mounted() {
    this.fetchComments();
  },

  methods: {
    async fetchTodos() {
      try {
        const { data }: { data: Todo[] } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        this.todos = data.slice(0, 20);
      } catch (error) {
        console.warn(error);
      }
    },

    async fetchComments() {
      try {
        const { data }: { data: Comment[] } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        this.comments = data;
      } catch (error) {
        console.warn(error);
      }
    },

    showComment(comment: Comment) {
      alert(`email: ${comment.email}\n\nbody: ${comment.body}`);
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
