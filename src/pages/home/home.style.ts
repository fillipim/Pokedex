import {Link} from "react-router-dom"
import styled from "styled-components";


export const Home = styled.div`
    width: 100%;
    text-align: center;
`

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DashboardButton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem 3rem;
    color: #fff;
    background-color: ${({theme}) => theme.colors.blue.quartiary};
    border-radius: 4px;
`