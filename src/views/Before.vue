<template>
  <div>
    <h2>Before</h2>
    <h3>Todos</h3>
    <ul>
      <li v-for="todo in todos" :key="`todo-${todo.id}`">{{ todo.title }}</li>
    </ul>

    <br />

    <h3>Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="`comment-${comment.id}`">
        {{ comment.body }}
      </li>
    </ul>
  </div>
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

  created() {
    this.fetchTodos();
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
  },
});
</script>
