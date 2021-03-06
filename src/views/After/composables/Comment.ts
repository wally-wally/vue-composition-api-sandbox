import axios, { AxiosResponse } from "axios";
import { ref, onMounted } from "@vue/composition-api";
import { UseComment, Comment } from "../types";
import { NoParamsFunction } from "@/types";

const useComment: NoParamsFunction<UseComment> = () => {
  const comments = ref([] as Comment[]);

  const fetchComments = async () => {
    try {
      const { data }: AxiosResponse<Comment[]> = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      comments.value = data;
    } catch (error) {
      console.warn(error);
      comments.value = [];
    }
  };

  const showComment = (comment: Comment) => {
    alert(`email: ${comment.email}\n\nbody: ${comment.body}`);
  };

  onMounted(fetchComments);

  return {
    comments,
    fetchComments,
    showComment,
  };
};

export default useComment;
