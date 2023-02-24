import { createGlobalStyle } from "styled-components";
// import
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-size: 10px
  }

  * {
    box-sizing: border-box;
  }

  input,
  button {
    padding: 0;
    border: none;
    background-color: transparent;
    font: inherit;
  }
  
  button {
    cursor: pointer;
  }

  .sr-out {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: 0;
  }
`;
