import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: ${({ theme }) => theme.basicWidth};
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;
