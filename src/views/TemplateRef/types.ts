import {
  NoParamsFunction,
  BaseFunction,
  VueEvent,
  CustomVueRef,
} from "@/types";
import { Ref } from "@vue/composition-api";

type HTMLInputEvent = VueEvent.Input<HTMLInputElement>;

export interface UseTemplateRef {
  keyword: Ref<string>;
  inputRef: CustomVueRef<HTMLInputElement>;
  handleInput: BaseFunction<HTMLInputEvent>;
  alertKeyword: NoParamsFunction;
}
