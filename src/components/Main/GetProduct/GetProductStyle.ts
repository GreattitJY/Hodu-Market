import styled, { css } from "styled-components";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 78px;
  column-gap: 70px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductImg = styled.img`
  aspect-ratio: 1/1;
  width: calc(100vw / 4);
  max-width: 380px;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 380px;

  @media screen and (max-width: 600px) {
    max-width: calc(100vw / 4);
  }
`;

const cssTextEllipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StoreName = styled.p`
  color: ${({ theme }) => theme.color.gray100};
  font-size: 1.6em;
  ${cssTextEllipsis}

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const ProductName = styled.p`
  font-size: 1.8rem;
  ${cssTextEllipsis}

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;

  strong {
    font-size: 2.4rem;
    font-weight: 700;
    ${cssTextEllipsis}

    @media screen and (max-width: 600px) {
      font-size: 2.2rem;
    }
  }

  span {
    font-size: 1.6rem;
    ${cssTextEllipsis}

    @media screen and (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
`;
