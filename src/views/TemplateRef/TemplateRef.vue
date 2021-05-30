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
import { defineComponent, onMounted, ref } from "@vue/composition-api";
import { CustomVueRef, VueEvent } from "@/types";

export default defineComponent({
  setup() {
    const keyword = ref("");

    // 기본적으로 ref()의 type은 Ref<any>인데 Ref의 제네릭으로 특정 타입을 지정하여
    // 다른 로직에서 해당 element의 메소드들을 자유롭게 사용할 수 있도록 구성했다.
    // 기존 Vue 2.x 에서 VueConstructor에 $refs의 타입을 지정하는 방식에서 착안했다.
    // inputRef는 mount 이후 binding 될 예정이다.
    const inputRef = ref() as CustomVueRef<HTMLInputElement>;

    onMounted(() => focusInput());

    const focusInput = () => {
      inputRef.value.focus();
    };

    const handleInput = (event: VueEvent.Input<HTMLInputElement>) => {
      keyword.value = event.target.value;
    };

    const alertKeyword = () => {
      const inputKeyword = keyword.value;

      alert(inputKeyword || "keyword를 최소 1자 이상 입력해주세요.");

      focusInput();
    };

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
