import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserInfo } from "../../export/types/indext";
import { HeaderWrapper, HeaderContainer, LogoImg, SearchForm, NavContainer, SellerBtn, BuyerBtn } from "./HeaderStyle";

export default function Header({ isBuyer }: UserInfo) {
  const logoImg = "/assets/images/Logo-hodu.png";
  const cartImg = "/assets/images/icon-shopping-cart.svg";
  const userImg = "/assets/images/icon-user.svg";
  const shoppingbagImg = "/assets/images/icon-shopping-bag.svg";

  const [userInfo, setUserInfo] = useState<undefined | string>(isBuyer);

  const getToken = localStorage.getItem("token");

  useEffect(() => {
    if (!getToken) setUserInfo(undefined);
    else setUserInfo(isBuyer);
  }, [getToken, isBuyer]);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1>
          <Link to="/" state={{ userInfo }}>
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
            <span>장바구니</span>
          </Link>
          {userInfo === undefined ? (
            <Link to="/login">
              <img src={userImg} alt="" />
              로그인
            </Link>
          ) : userInfo === "BUYER" ? (
            <BuyerBtn>
              <img src={userImg} alt="" />
              <span>마이페이지</span>
            </BuyerBtn>
          ) : (
            <SellerBtn>
              <img src={shoppingbagImg} alt="" />
              <span>판매자 센터</span>
            </SellerBtn>
          )}
        </NavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
