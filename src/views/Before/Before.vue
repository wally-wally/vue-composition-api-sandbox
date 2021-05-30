<template>
  <section>
    <h2>Before</h2>

    <article class="click-count-wrapper">
      <button @click="addValue">Add!</button>
      <button class="ml-10" @click="subtractValue">Minus!</button>
      <span class="pl-10">value : {{ value }}</span>
    </article>

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
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Todo, Comment } from "./types";
import { Album, Photo } from "../After/types";

export default Vue.extend({
  name: "Before",
  data() {
    return {
      value: 0,
      todos: [] as Todo[],
      comments: [] as Comment[],
      albums: [] as Album[],
      photos: [] as Photo[],
    };
  },

  computed: {
    todoCount(): number {
      return this.todos.length;
    },
  },

  watch: {
    // Vue.extend 방식 에서는 watch의 인자의 타입이 any로 잡힌다.
    // 그래서 명시적으로 직접 타입을 선언해줘야 한다.
    value(val) {
      console.log(`value : ${val}`);
    },
  },

  created() {
    this.fetchTodos();
    this.fetchAlbums();
    this.fetchPhotos();
  },

  mounted() {
    this.fetchComments();
  },

  methods: {
    addValue() {
      this.value += 1;
    },

    subtractValue() {
      this.value -= 1;
    },

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

    async fetchAlbums() {
      try {
        const { data }: { data: Album[] } = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        this.albums = data.slice(0, 20);
      } catch (error) {
        console.warn(error);
        this.albums = [];
      }
    },

    async fetchPhotos() {
      try {
        const { data }: { data: Photo[] } = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        this.photos = data.slice(0, 20);
      } catch (error) {
        console.warn(error);
        this.photos = [];
      }
    },

    showComment(comment: Comment) {
      alert(`email: ${comment.email}\n\nbody: ${comment.body}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.click-count-wrapper {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;

  .ml-10 {
    margin-left: 10px;
  }

  .pl-10 {
    padding-left: 10px;
  }
}

.comment-list-item {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
