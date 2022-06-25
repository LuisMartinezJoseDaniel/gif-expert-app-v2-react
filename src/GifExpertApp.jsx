import { AddCategory, CategoriesList } from "./components";

import { GifProvider } from "./context/GifProvider";

const GifExpertApp = () => {

  return (
    <GifProvider>
      <div className="p-10 mx-5 bg-white border shadow-lg rounded md:w-10/12 md:mx-auto">
        <h1 className="text-2xl font-black">GifExpertApp</h1>
        
        <AddCategory />
        
        <CategoriesList />

      </div>
    </GifProvider>
  );
};

export default GifExpertApp;
