import { NoParamsFunction, BaseFunction } from "@/types";
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

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface UseTodo {
  todos: Ref<Todo[]>;
  todoCount: ComputedRef<number>;
  fetchTodos: NoParamsFunction<Promise<void>>;
}

export interface UseComment {
  comments: Ref<Comment[]>;
  fetchComments: NoParamsFunction<Promise<void>>;
  showComment: BaseFunction<Comment, void>;
}

export interface UseAlbum {
  albums: Ref<Album[]>;
  fetchAlbums: NoParamsFunction<Promise<void>>;
}

export interface UsePhoto {
  photos: Ref<Photo[]>;
  fetchPhotos: NoParamsFunction<Promise<void>>;
}

export interface UseClick {
  value: Ref<number>;
  addValue: NoParamsFunction<void>;
  subtractValue: NoParamsFunction<void>;
}
