import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderContainer, LogoImg, SearchForm, NavContainer } from "./HeaderStyle";

export default function Header() {
  const logoImg = "/assets/images/Logo-hodu.png";
  const cartImg = "/assets/images/icon-shopping-cart.svg";
  const userImg = "/assets/images/icon-user.svg";

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1>
          <Link to="/">
            <LogoImg src={logoImg} alt="호두마켓 로고입니다." />
          </Link>
        </h1>
        <SearchForm action="">
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button type="button">검색</button>
        </SearchForm>
        <NavContainer>
          <Link to="/cart">
            <img src={cartImg} alt="" />
            장바구니
          </Link>
          <Link to="/login">
            <img src={userImg} alt="" />
            로그인
          </Link>
        </NavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
