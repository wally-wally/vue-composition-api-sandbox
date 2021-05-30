import axios from "axios";
import { ref } from "@vue/composition-api";
import { Album, UseAlbum } from "../types";
import { NoParamsFunction } from "@/types";

const useAlbum: NoParamsFunction<UseAlbum> = () => {
  const albums = ref([] as Album[]);

  const fetchAlbums = async () => {
    try {
      const { data }: { data: Album[] } = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      albums.value = data.slice(0, 20);
    } catch (error) {
      console.warn(error);
      albums.value = [];
    }
  };

  return {
    albums,
    fetchAlbums,
  };
};

export default useAlbum;
