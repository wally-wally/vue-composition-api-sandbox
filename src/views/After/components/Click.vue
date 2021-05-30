<template>
  <article class="click-count-wrapper">
    <button @click="addValue">Add!</button>
    <button class="ml-10" @click="subtractValue">Minus!</button>
    <span class="pl-10">value : {{ value }}</span>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  // setup의 첫 번째 인자는 props로 반응성이 있다.
  // 그래서 destructuring 문법을 사용하려면 setup 내에서 ref 대신 toRefs를 사용하여 반응성을 유지해야 한다.
  // 두 번째 인자는 context 객체로 attrs, slots, emit 세 가지 property가 있다.
  // props와 달리 context 객체는 일반적인 JS 객체 이므로 반응성이 존재하지 않아 바로 destructuring 문법을 사용할 수 있다.
  // setup이 실행될 때 접근 가능한 속성 : props, attrs, slots, emit (data, computed, methods에는 접근 불가능)
  setup(_, { emit }) {
    // 가장 간단하게 작성하면 After 부모 컴포넌트 밑에 Click 이라는 자식 컴포넌트를 구성하지 않고
    // 이 컴포넌트에서 아래와 같이 작성하고 바로 사용해도 된다.
    // const { value, addValue, subtractValue } = useClick();
    // 하지만 지금은 vue composition api의 다양한 옵션들을 사용해보기 위해 분리해서 작성했다.

    const addValue = () => {
      emit("add-value");
    };

    const subtractValue = () => {
      emit("subtract-value");
    };

    return {
      addValue,
      subtractValue,
    };
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
</style>
