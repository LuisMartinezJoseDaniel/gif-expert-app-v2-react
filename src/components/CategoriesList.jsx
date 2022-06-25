import { GifGrid } from "./";

import { useGif } from "../hooks";

export const CategoriesList = () => {
  const { categories } = useGif();

  return (
    <>
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
