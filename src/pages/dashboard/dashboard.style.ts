import { Link } from "react-router-dom";
import styled from "styled-components";

export const Conatiner =  styled.main`
    width: 100%;
    padding: 0 10rem;
    margin-top: 2rem;
`

export const Header = styled.header`
    padding: 0 10rem;
    text-align: center;
    background-color: ${({theme}) => theme.colors.white.tertiary};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    img{
        padding: .5rem 0;
        width: 100px;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
export const ButtonBox = styled.div` 
    display: flex;
    justify-content: space-between;
`

export const ButtonPages = styled.button` 
    padding: .5rem 2rem;
    background-color: ${({theme}) => theme.colors.white.quartiary};
    color: #000;
    border-radius: 4px;
    margin-bottom: 1rem;
`
export const BackButton = styled(Link)`
    background-color: ${({theme}) => theme.colors.blue.quartiary};
    padding: .5rem;
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
`