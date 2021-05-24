import { ComputedRef, Ref } from "@vue/composition-api";

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

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
