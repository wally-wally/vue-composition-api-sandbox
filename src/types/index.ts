import { Ref } from "@vue/composition-api";

export type BaseFunction<P, T = void> = (param: P) => T;
export type NoParamsFunction<T = void> = () => T;

export type CustomVueRef<T> = Ref<T>;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent {
    target: T;
  }

  export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
    target: T;
  }

  export interface Mouse<T extends EventTarget> extends MouseEvent {
    target: T;
  }
}
