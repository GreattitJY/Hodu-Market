import React, { useRef, useState } from "react";
import { useAxios } from "../../export/api";
import {
  JoinAndPassword,
  LoginContainer,
  LoginFieldset,
  LoginForm,
  LoginWrap,
  LogoImg,
  LogoLink,
  UserSelectBtn,
} from "./LoginStyle";

export default function LoginPage() {
  const logoImg = "/assets/images/Logo-hodu.png";

  const userBtnRef = useRef<HTMLButtonElement[] | null[]>([]);
  const [isBuyer, setIsBuyer] = useState<boolean>(true);

  const handleUserLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === userBtnRef.current[0]) {
      setIsBuyer(true);
    } else if (e.target === userBtnRef.current[1]) {
      setIsBuyer(false);
    }
  };

  const { data, error, loading, fetchData } = useAxios({
    method: "post",
    url: "accounts/login/",
    body: {
      username: "test",
    },
  });

  return (
    <LoginWrap>
      <LoginContainer>
        <LogoLink to="/">
          <LogoImg src={logoImg} alt="" />
        </LogoLink>
        <UserSelectBtn>
          <button onClick={handleUserLogin} ref={(buyer) => (userBtnRef.current[0] = buyer)}>
            구매회원 로그인
          </button>
          <button onClick={handleUserLogin} ref={(seller) => (userBtnRef.current[1] = seller)}>
            판매회원 로그인
          </button>
        </UserSelectBtn>
        <LoginForm>
          <LoginFieldset>
            <legend className="sr-out">로그인 아이디 및 비밀번호 입력</legend>
            <input type="text" placeholder="아이디" />
            <input type="text" placeholder="비밀번호" />
            <button>로그인</button>
          </LoginFieldset>
        </LoginForm>
        <JoinAndPassword>
          <button>회원가입</button>
          <button>비밀먼호 찾기</button>
        </JoinAndPassword>
      </LoginContainer>
    </LoginWrap>
  );
}
