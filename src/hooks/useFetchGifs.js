import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// * Un hook es solo una funcion que regresa algo
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // * Este effect solo se llama cuando se crea un nuevo componente, de una nueva categoria
  // * No es necesario especificar el category en las deps, ya que, se crea un componente nuevo por cada vez que haya una nueva categoria.

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
}

