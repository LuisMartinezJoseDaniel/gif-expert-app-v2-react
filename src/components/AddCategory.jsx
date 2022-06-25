import { useState } from "react";
import { useGif } from "../hooks";

export const AddCategory = () => {
  const { onAddCategory } = useGif();

  const [inputValue, setInputValue] = useState( "" );
  
  const onInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return; // Si no hay ningun valor
    
    onAddCategory( inputValue.trim() );

    setInputValue( "" );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="border bg-gray-200 focus:bg-white focus:border-slate-400 hover:transition-all duration-300 block w-full p-2 my-5 text-slate-500"
        type="text"
        value={inputValue}
        placeholder="Buscar gifs"
        onChange={onInputChange}
      />
    </form>
  );
};


