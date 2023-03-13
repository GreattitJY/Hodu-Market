import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginStyleBtnProps } from "../../export/interface";

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

export const LogoLink = styled(Link)`
  margin: 0 auto 70px;
`;

export const LogoImg = styled.img`
  width: 238px;
  height: 74px;
`;

export const UserSelectBtnContainer = styled.div`
  display: flex;
  background-color: #fff;
`;

export const UserSelectBtn = styled.button<LoginStyleBtnProps>`
  width: 275px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: -1px;
  z-index: 10;
  font-size: 1.8rem;
  font-weight: 500;

  :first-child {
    background-color: ${(props) => (props.isBuyer ? "#fff" : `${props.theme.color.gray300}`)};
    border-bottom: ${(props) => (props.isBuyer ? "none" : `1px solid ${props.theme.color.gray200}`)};
  }

  :last-child {
    background-color: ${(props) => (props.isBuyer ? `${props.theme.color.gray300}` : "#fff")};
    border-bottom: ${(props) => (props.isBuyer ? `1px solid ${props.theme.color.gray200}` : "none")};
    position: relative;
  }
`;

export const LoginForm = styled.form`
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  padding: 34px;
  font-size: 1.6rem;
  font-weight: 400;
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
    color: #fff;
  }
`;

export const JoinAndPassword = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px auto 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black100};
  position: relative;

  ::before {
    content: " ";
    display: inline-block;
    width: 1px;
    height: 14px;
    background-color: ${({ theme }) => theme.color.black100};
    position: absolute;
    left: 70px;
  }
`;
