import axios from "axios";
import { ref, computed } from "@vue/composition-api";
import { UseTodo, Todo } from "../types";
import { ReturnNoParamsFunction } from "@/types";

const useTodo: ReturnNoParamsFunction<UseTodo> = () => {
  const todos = ref([] as Todo[]);
  const todoCount = computed(() => todos.value.length);

  const fetchTodos = async () => {
    try {
      const { data }: { data: Todo[] } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      todos.value = data.slice(0, 20);
    } catch (error) {
      console.warn(error);
      todos.value = [];
    }
  };

  return {
    todos,
    todoCount,
    fetchTodos,
  };
};

export default useTodo;
