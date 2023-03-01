import styled, { css } from "styled-components";
import { PageNationBtnProps } from "../../../../export/interface";

const cssBtn = css`
  font-size: 1.6rem;
  padding: 3px;
  color: ${(props) => props.theme.color.gray100};
`;

export const PageNationContainer = styled.div`
  button {
    ${cssBtn}
  }
`;

export const PageNumberBtn = styled.button<PageNationBtnProps>`
  &[data-page="${(props) => props.productsPage}"] {
    color: ${(props) => props.theme.color.green100};
  }
`;
