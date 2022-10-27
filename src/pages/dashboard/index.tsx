import ListPokemon from "../../components/ListPokemon";
import logo from "../../assets/img/logo.png";

import * as S from "./dashboard.style";
import { usePokemonContext } from "../../contexts/Pokemon";

const Dashboard = () => {
    const {nextPage, previousPage} = usePokemonContext()
  return (
    <>
      <S.Header>
        <div>
        <img src={logo} alt="Pokedéx Logo" />
        <S.BackButton to="/">Back</S.BackButton>
        </div>
      </S.Header>
      <S.Conatiner>
        <ListPokemon />
        <S.ButtonBox>
          <S.ButtonPages onClick={previousPage}>Previous</S.ButtonPages>
          <S.ButtonPages onClick={nextPage}>Next</S.ButtonPages>
        </S.ButtonBox>
      </S.Conatiner>
    </>
  );
};

export default Dashboard;
