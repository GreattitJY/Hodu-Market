import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  max-width: ${({ theme }) => theme.basicWidth};
  /* max-width: calc(100vw - 30%); */
  display: flex;
  flex: 1;
  /* justify-content: space-between; */
  align-items: center;
  box-shadow: inset 0 0 10px blue;
  padding: 22px 0;
`;

export const LogoImg = styled.img`
  width: 124px;
  height: 38px;
`;

export const SearchForm = styled.form`
  position: relative;

  input {
    width: 400px;
    border: 2px solid ${({ theme }) => theme.color.green100};
    border-radius: 50px;
    padding: 13px 50px 13px 13px;
    margin-left: 30px;
    font-size: 1.6rem;
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
