import React from "react";
import { HeaderWrapper, HeaderContainer, LogoImg, SearchForm } from "./HeaderStyle";

export default function Header() {
  const logoImg = "/assets/images/Logo-hodu.png";

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoImg src={logoImg} alt="호두마켓 로고입니다." />
        <SearchForm action="">
          <input type="text" placeholder="상품을 검색해보세요!" />
          <button type="button">검색</button>
        </SearchForm>
        <button>
          <img src="" alt="" />
          장바구니
        </button>
        <button>
          <img src="" alt="" />
          로그인
        </button>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
