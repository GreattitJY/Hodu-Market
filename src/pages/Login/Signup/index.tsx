import React, { useRef, useState } from "react";
import {
  LoginContainer,
  LoginForm,
  LoginWrap,
  LogoImg,
  LogoLink,
  UserSelectBtn,
  UserSelectBtnContainer,
} from "../LoginStyle";
import { SignupFieldset } from "./SignupStyle";

export default function Signup() {
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

  return (
    <LoginWrap>
      <LoginContainer>
        <LogoLink to="/">
          <LogoImg src={logoImg} alt="" />
        </LogoLink>
        <UserSelectBtnContainer>
          <UserSelectBtn onClick={handleUserLogin} ref={(buyer) => (userBtnRef.current[0] = buyer)} {...{ isBuyer }}>
            구매회원 가입
          </UserSelectBtn>
          <UserSelectBtn onClick={handleUserLogin} ref={(seller) => (userBtnRef.current[1] = seller)} {...{ isBuyer }}>
            판매회원 가입
          </UserSelectBtn>
        </UserSelectBtnContainer>
        <LoginForm id="info">
          <SignupFieldset>
            <legend className="sr-out">회원 정보 입력</legend>

            <label htmlFor="id">아이디</label>
            <input type="text" id="id" />
            <button>중복확인</button>

            <label htmlFor="password">비밀번호</label>
            <input type="text" id="password" name="password" />

            <label htmlFor="passwordCheck">비밀번호 재확인</label>
            <input type="text" id="passwordCheck" name="passwordCheck" />

            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="phone">휴대폰번호</label>
            <input type="text" id="phone" name="phone" />
            <input type="text" name="phone" />
            <input type="text" name="phone" />

            <label htmlFor="mail">이메일</label>
            <input type="text" id="mail" name="mail" />
            <span>@</span>
            <input type="text" name="mail" />
          </SignupFieldset>
        </LoginForm>
        <label>
          <input type="checkbox" name="agree" />
          호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.
        </label>
        <button form="info">가입하기</button>
      </LoginContainer>
    </LoginWrap>
  );
}
