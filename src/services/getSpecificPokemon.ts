import { iPokemon } from "../components/Pokemon";
import { api } from "./api";

export const getSpecificPokemon = async (url: string) => {
  const { data } = await api.get<iPokemon>(url);
  return data;
};
