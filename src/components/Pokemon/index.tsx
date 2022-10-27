import { useEffect, useState } from "react";
import { getSpecificPokemon } from "../../services/getSpecificPokemon";

import * as S from "./pokemon.style";

interface iPokemonType{
  type: {name: string}
}

export interface iPokemon {
  order: number;
  types: iPokemonType[];
  sprites: {
    front_default: string | undefined;
  };
}

const Pokemon = ({ name, url }: { name: string; url: string }) => {
  const [pokemon, setPokemon] = useState<iPokemon | null>(null);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    try {
      const data = await getSpecificPokemon(url);
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.PokemonCard>
      {!pokemon ? (
        <S.Loading />
      ) : (
        <>
          <div>
            <img src={pokemon?.sprites?.front_default} alt={name} />
          </div>
          <S.PokemonName>
            {name.charAt(0).toUpperCase() + name.substring(1)}
          </S.PokemonName>
          <span>{`#${pokemon?.order}`}</span>
          <S.TypeList>
            {pokemon?.types.map(({ type }) => (
              <S.PokemonType pokemonType={type.name}>{type.name}</S.PokemonType>
            ))}
          </S.TypeList>
        </>
      )}
    </S.PokemonCard>
  );
};

export default Pokemon;
