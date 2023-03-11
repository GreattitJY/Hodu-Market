import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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
  const loginInputRef = useRef<HTMLInputElement[] | null[]>([]);
  const [isBuyer, setIsBuyer] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState();

  const handleUserLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === userBtnRef.current[0]) {
      setIsBuyer(true);
    } else if (e.target === userBtnRef.current[1]) {
      setIsBuyer(false);
    }
  };
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger;
    console.log(loginInputRef.current[0]?.value);
    setIsUpdated(true);
  };

  const { data, error, loading, fetchData } = useAxios({
    method: "post",
    url: "accounts/login/",
    isUpdated,
    data: {
      // username: "buyer1",
      // password: "hodu0910",
      // username: `${isUpdated ? loginInputRef.current[0]?.value : ""}`,
      username: loginInputRef.current[0]?.value,
      password: loginInputRef.current[1]?.value,
      login_type: "BUYER",
    },
  });

  useEffect(() => {
    if (!isUpdated) return;
    fetchData();
    setIsUpdated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdated]);

  useEffect(() => {
    if (error) {
      console.log("error", error);
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      // console.log("로딩중입니다.");
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      setIsLogin(data);
    }
  }, [data]);

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

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
        <LoginForm onSubmit={handleSubmit}>
          <LoginFieldset>
            <legend className="sr-out">로그인 아이디 및 비밀번호 입력</legend>
            <input type="text" placeholder="아이디" ref={(id) => (loginInputRef.current[0] = id)} />
            <input type="text" placeholder="비밀번호" ref={(password) => (loginInputRef.current[1] = password)} />
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
