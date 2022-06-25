import { useContext } from "react"
import GifContext from "../context/GifProvider"
export const useGif = () => {
  return useContext( GifContext );
}
