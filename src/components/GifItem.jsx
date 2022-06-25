export const GifItem = ({ title, url }) => {
  return (
    <div className="border bg-white rounded-lg shadow-md transition ease-in-out duration-300 hover:scale-110 hover:translate-y-2">
      <img
        className="rounded-md sm:h-64 h-48 bg-cover object-cover w-full"
        src={url}
        alt={`Imagen de ${title}`}
      />

      {title.trim() && <h3 className="p-3 capitalize">{title}</h3>}
    </div>
  );
};
