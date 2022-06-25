import { createContext, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [categories, setCategories] = useState(["Demon Slayer"]);
  
  // TODO: revisar category con lowercase y uppercase
  const onAddCategory = (category) => {

    if ( categories.includes( category ) ) return;

    setCategories( [category, ...categories] );
  };

  return (
    <GifContext.Provider
      value={{ categories, onAddCategory }}
    >
      {children}
    </GifContext.Provider>
  );
};

export { GifProvider };
export default GifContext;
