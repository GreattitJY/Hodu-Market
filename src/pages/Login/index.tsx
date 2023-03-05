import React from "react";
import { Link } from "react-router-dom";
import { LoginContainer, LoginWrap } from "./LoginStyle";

export default function LoginPage() {
  const logoImg = "/assets/images/Logo-hodu.png";

  return (
    <LoginWrap>
      <LoginContainer>
        <img src={logoImg} alt="" />
        <article></article>
        <nav>
          <Link to="/">회원가입</Link>
          <Link to="/">비밀먼호 찾기</Link>
        </nav>
      </LoginContainer>
    </LoginWrap>
  );
}
