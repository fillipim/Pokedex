import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    outline: none;
    font-family: 'Rajdhani', sans-serif;
    text-decoration: none;
  }
  button{
    cursor: pointer;
  }
  body{
    background: linear-gradient(134deg, #2db800, #0ea1ed, #ed820e);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:17% 0%}
    50%{background-position:84% 100%}
    100%{background-position:17% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:17% 0%}
    50%{background-position:84% 100%}
    100%{background-position:17% 0%}
}
@keyframes AnimationName {
    0%{background-position:17% 0%}
    50%{background-position:84% 100%}
    100%{background-position:17% 0%}
}
`