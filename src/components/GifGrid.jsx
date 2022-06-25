
import { GifItem, Spinner } from "./";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-2xl font-bold my-5">{category}</h3>
      {isLoading && <Spinner />}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img) => (
          // * Esparcir las props de la img, se reciben como props
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
