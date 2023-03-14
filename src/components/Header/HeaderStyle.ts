import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 22px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: ${({ theme }) => theme.basicWidth};
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 124px;
  height: 38px;
`;

export const SearchForm = styled.form`
  position: relative;
  margin-left: 30px;
  margin-right: auto;

  @media screen and (max-width: 800px) {
    margin-left: 15px;
  }

  input {
    width: 400px;
    border: 2px solid ${({ theme }) => theme.color.green100};
    border-radius: 50px;
    padding: 13px 50px 13px 13px;
    font-size: 1.6rem;

    @media screen and (max-width: 800px) {
      max-width: 200px;
    }
  }

  button {
    font-size: 1.2rem;
    position: absolute;
    right: 15px;
    top: 10px;
    background-image: url("/assets/images/icon-search.svg");
    width: 28px;
    height: 28px;
    text-indent: -9999px;
  }
`;

const HeaderBtnCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.color.gray100};
  font-size: 12px;
  font-weight: 400;
  img {
    width: 28px;
    height: 28px;
  }
`;

const ScreenOutCSS = css`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: 0;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 26px;
  flex-shrink: 0;

  a {
    ${HeaderBtnCSS}

    @media screen and (max-width: 600px) {
      padding: 10px 0;
      span {
        ${ScreenOutCSS}
      }
    }
  }

  @media screen and (max-width: 600px) {
    gap: 12px;
  }
`;

export const BuyerBtn = styled.button`
  ${HeaderBtnCSS}
  @media screen and (max-width: 600px) {
    padding: 10px 0;
    span {
      ${ScreenOutCSS}
    }
  }
`;

export const SellerBtn = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.color.green100};
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  gap: 12px;
  padding: 0px 14px;
  border-radius: 5px;

  img {
    width: 28px;
    height: 28px;
  }

  span {
    margin-top: 4px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 10px;
    span {
      ${ScreenOutCSS}
    }
  }
`;
