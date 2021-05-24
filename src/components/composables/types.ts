import { ComputedRef, Ref } from "@vue/composition-api";
import { Todo, Comment } from "../types";

export interface UseTodo {
  todos: Ref<Todo[]>;
  todoCount: ComputedRef<number>;
  fetchTodos: () => Promise<void>;
}

export interface UseComment {
  comments: Ref<Comment[]>;
  fetchComments: () => Promise<void>;
  showComment: (comment: Comment) => void;
}
