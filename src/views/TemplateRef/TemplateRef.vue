<template>
  <section>
    <h2>TemplateRef</h2>

    <article class="input-wrapper">
      <input
        type="text"
        ref="inputRef"
        placeholder="Please Type Keyword"
        :value="keyword"
        @input="handleInput"
      />
      <button class="ml-10" @click="alertKeyword">submit</button>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import useTemplateRef from "./composables/useTemplateRef";

export default defineComponent({
  setup() {
    const { keyword, inputRef, handleInput, alertKeyword } = useTemplateRef();

    return {
      keyword,
      inputRef,
      handleInput,
      alertKeyword,
    };
  },
});
</script>

<style lang="scss" scoped>
.input-wrapper {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;

  .ml-10 {
    margin-left: 10px;
  }
}
</style>
