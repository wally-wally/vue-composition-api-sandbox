<template>
  <section>
    <h2>After</h2>

    <Click
      :value="value"
      @add-value="addValue"
      @subtract-value="subtractValue"
    />

    <Todo :todos="todos" :todoCount="todoCount" />

    <Comment :comments="comments" @click-comment="showComment" />

    <Album :albums="albums" />

    <Photo :photos="photos" />

    <UserInfo :userInfo="userInfo" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import Click from "./components/Click.vue";
import Todo from "./components/Todo.vue";
import Comment from "./components/Comment.vue";
import Album from "./components/Album.vue";
import Photo from "./components/Photo.vue";
import UserInfo from "./components/UserInfo.vue";

import useTodo from "./composables/Todo";
import useComment from "./composables/Comment";
import useAlbum from "./composables/Album";
import usePhoto from "./composables/Photo";
import useClick from "./composables/Click";
import useUserInfo from "./composables/UserInfo";

export default defineComponent({
  name: "After",
  components: {
    Todo,
    Comment,
    Album,
    Photo,
    Click,
    UserInfo,
  },

  setup() {
    const { value, addValue, subtractValue } = useClick();

    const { todos, todoCount, fetchTodos } = useTodo();
    fetchTodos();

    const { comments, showComment } = useComment();

    const { albums, fetchAlbums } = useAlbum();
    fetchAlbums();

    const { photos, fetchPhotos } = usePhoto();
    fetchPhotos();

    const { userInfo, fetchUserInfo } = useUserInfo();
    fetchUserInfo();

    return {
      value,
      addValue,
      subtractValue,
      todos,
      todoCount,
      comments,
      showComment,
      albums,
      photos,
      userInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
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
