import styled, { css } from "styled-components";

export const PokemonCard = styled.li` 
    width: 220px;
    min-height: 250px;
    border: 2px solid ${({theme}) => theme.colors.white.quartiary};
    margin-bottom: 1rem;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.white.primary};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    div{
        background-color: ${({theme}) => theme.colors.white.quartiary};
        overflow: hidden;
        text-align: center;
        height: 154px;
    }
    img{
        width: 150px;
    }
    span{
        padding: .5rem;
    }
`

export const PokemonName = styled.h3`
    font-size: 1.2rem;
    padding: .5rem;
`
export const TypeList = styled.ul` 
    display: flex;
    flex-wrap: row wrap;
    padding: .5rem;
`
export const Loading = styled.span`
    display: block;
    width: 50px;
    border: 5px solid transparent;
    height: 50px;
    border-top: 5px solid ${({theme}) => theme.colors.blue.primary};
    animation: is-rotate 1s infinite ease-in-out;
    border-radius: 50%;
    margin: auto;
    @keyframes is-rotate {
      to {
        transform: rotate(1turn);
      } 
    }
`

export const PokemonType = styled.li<{ pokemonType: string}>`
  padding: 4px 8px;
  width: 81px;
  text-align: center;
  border-radius: 4px;
  margin-right: 4px;
  ${({ pokemonType }) => {
    switch (pokemonType) {
      case "grass":
        return css`
        background-color: ${({theme}) => theme.colors.green.primary};
        `;
      case "poison":
        return css`
        background-color: ${({theme}) => theme.colors.purple.primary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "fire":
        return css`
        background-color: ${({theme}) => theme.colors.orange.tertiary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "flying":
        return css`
        background-color: ${({theme}) => theme.colors.white.tertiary};
        `;
      case "water":
        return css`
        background-color: ${({theme}) => theme.colors.blue.primary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "bug":
        return css`
        background-color: ${({theme}) => theme.colors.blue.secondary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "normal":
        return css`
        background-color: ${({theme}) => theme.colors.brown.secondary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "electric":
        return css`
        background-color: ${({theme}) => theme.colors.purple.secondary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "ground":
        return css`
        background-color: ${({theme}) => theme.colors.brown.primary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "fighting":
        return css`
        background-color: ${({theme}) => theme.colors.blue.tertiary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "psychic":
        return css`
        background-color: ${({theme}) => theme.colors.blue.quartiary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "rock":
        return css`
        background-color: ${({theme}) => theme.colors.gray.tertiary};
        color: ${({theme}) => theme.colors.white.primary};
        `;
      case "ghost":
        return css`
          background-color: ${({theme}) => theme.colors.gray.quartiary};
          color: ${({theme}) => theme.colors.white.primary};
          `;
      case "ice":
        return css`
          background-color: ${({theme}) => theme.colors.white.quartiary};
          `;
      case "dragon":
        return css`
          background-color: ${({theme}) => theme.colors.orange.quartiary};
          color: ${({theme}) => theme.colors.white.primary};
          `;
      case "fairy":
        return css`
          background-color: ${({theme}) => theme.colors.purple.tertiary};
          color: ${({theme}) => theme.colors.white.primary};
        `
    }
  }};
`;