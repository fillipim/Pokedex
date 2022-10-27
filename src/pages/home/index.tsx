import { Link } from "react-router-dom"
import logo from "../../assets/img/logo.png"

import * as S from "./home.style"

const Home = () => (
    <S.Home>
        <S.Logo>
            <img src={logo} alt="Pokedex Logo" />
            <S.DashboardButton to="/dashboard">
                Start
            </S.DashboardButton>
        </S.Logo>
    </S.Home>
);

export default Home;