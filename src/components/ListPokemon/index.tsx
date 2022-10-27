import { usePokemonContext } from "../../contexts/Pokemon";
import Loading from "../Load";
import Pokemon from "../Pokemon";
import * as S from "./listPokemon.style";

const ListPokemon = () => {
  const { pokemons, load } = usePokemonContext();

  return load ? (
    <Loading />
  ) : (
    <S.ListPokemon>
      {pokemons.results.map(({ name, url }) => (
        <Pokemon name={name} url={url} key={name} />
      ))}
    </S.ListPokemon>
  );
};
export default ListPokemon;
