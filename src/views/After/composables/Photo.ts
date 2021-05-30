import axios from "axios";
import { ref } from "@vue/composition-api";
import { Photo, UsePhoto } from "../types";
import { NoParamsFunction } from "@/types";

const usePhoto: NoParamsFunction<UsePhoto> = () => {
  const photos = ref([] as Photo[]);

  const fetchPhotos = async () => {
    try {
      const { data }: { data: Photo[] } = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      photos.value = data.slice(0, 20);
    } catch (error) {
      console.warn(error);
      photos.value = [];
    }
  };

  return {
    photos,
    fetchPhotos,
  };
};

export default usePhoto;
