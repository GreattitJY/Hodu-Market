import { createGlobalStyle } from "styled-components";
// import
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`;
