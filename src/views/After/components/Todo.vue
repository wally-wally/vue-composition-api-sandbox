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

<style lang="scss" scoped>
.todo-list {
  display: inline-block;
  margin: 0;
}
</style>
