import { ref, watch } from "@vue/composition-api";
import { NoParamsFunction } from "@/types";
import { UseClick } from "../types";

const useClick: NoParamsFunction<UseClick> = () => {
  const value = ref(0);

  const addValue = () => {
    value.value += 1;
  };

  const subtractValue = () => {
    value.value -= 1;
  };

  // Vue.extend 방식과 달리 vue composition api의 watch를 사용하면
  // 함수 인자(val)의 타입이 number로 자동 추론되는 것을 확인할 수 있다.
  watch(value, (val) => console.log(val));

  return {
    value,
    addValue,
    subtractValue,
  };
};

export default useClick;
