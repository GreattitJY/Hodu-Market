import styled from "styled-components";

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  width: 238px;
  height: 74px;
  margin: 0 auto 70px;
`;

export const UserSelectBtn = styled.div`
  display: flex;
  background-color: #fff;

  button {
    width: 275px;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.color.gray200};
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* margin-bottom: -10px; */
  }
`;

export const LoginForm = styled.form`
  border: 1px solid ${({ theme }) => theme.color.gray200};
  /* border-top: none; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  padding: 34px;
`;

export const LoginFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  input {
    padding: 20px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  }

  button {
    width: 480px;
    height: 60px;
    margin: 36px auto 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.green100};
  }
`;

export const JoinAndPassword = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px auto 0;
`;
