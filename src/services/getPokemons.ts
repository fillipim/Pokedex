import { iPokemon } from "../contexts/Pokemon";
import { api } from "./api";

export interface iPokemonResponse {
  next: string | null;
  previous: string | null;
  results: iPokemon[]
}

export const getPokemons = async (url: string) => {
  const { data } = await api.get<iPokemonResponse>(url);
  console.log(data);
  
  return data;
};
