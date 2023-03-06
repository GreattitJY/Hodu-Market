import React, { useRef, useState } from "react";
import { LoginContainer, LoginWrap } from "./LoginStyle";

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

  return (
    <LoginWrap>
      <LoginContainer>
        <img src={logoImg} alt="" />
        <article>
          <div>
            <button onClick={handleUserLogin} ref={(buyer) => (userBtnRef.current[0] = buyer)}>
              구매회원 로그인
            </button>
            <button onClick={handleUserLogin} ref={(seller) => (userBtnRef.current[1] = seller)}>
              판매회원 로그인
            </button>
          </div>
          {isBuyer && <p>구매회원 창</p>}
          {!isBuyer && <p>판매회원 창</p>}
          <div>
            <button>회원가입</button>
            <button>비밀먼호 찾기</button>
          </div>
        </article>
      </LoginContainer>
    </LoginWrap>
  );
}
