import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "../../constants/endpoints";
import { getPokemons, iPokemonResponse } from "../../services/getPokemons";

export interface iPokemon {
  name: string;
  url: string;
}

interface iPokemonContexProps {
  children: ReactNode;
}

interface iPokemonContext {
  pokemons: iPokemonResponse;
  setPokemons: React.Dispatch<React.SetStateAction<iPokemonResponse>>;
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
  loadPokemons: (url: string) => void;
  nextPage: () => void;
  previousPage: () => void;
}

const PokemonContext = createContext<iPokemonContext>({} as iPokemonContext);

const PokemonProvider = ({ children }: iPokemonContexProps) => {
  const [pokemons, setPokemons] = useState({} as iPokemonResponse);
  const [load, setLoad] = useState<boolean>(true);

  const loadPokemons = async (url: string) => {
    setLoad(true)
    try {
      const data = await getPokemons(url);
      setPokemons(data);
      setLoad(false)
    } catch (error) {
      console.log(error);     
    }
  };

  const nextPage = () => pokemons.next && loadPokemons(pokemons.next);

  const previousPage = () => pokemons.previous && loadPokemons(pokemons.previous)

  useEffect(() => {
    loadPokemons(baseUrl);
  }, []);

  return (
    <PokemonContext.Provider
      value={{ pokemons, setPokemons, loadPokemons, load, setLoad, nextPage, previousPage }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

export const usePokemonContext = () => useContext(PokemonContext);
