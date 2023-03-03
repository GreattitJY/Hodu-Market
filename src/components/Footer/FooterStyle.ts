import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.gray300};
  padding: 22px;

  @media screen and (max-width: 1000px) {
    padding: 20px;
  }
`;

export const FooterContainer = styled.div`
  font-size: 1.4rem;
  max-width: ${({ theme }) => theme.basicWidth};
  margin: 38px auto 43px;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray200};

  @media screen and (max-width: 880px) {
    flex-direction: column;
    gap: 20px;
    padding-bottom: 15px;
  }

  ul {
    display: flex;
    align-items: center;

    :first-child {
      gap: 32px;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li:nth-child(3) {
        font-weight: 700;
      }

      li + li::before {
        content: " ";
        display: inline-block;
        width: 1px;
        height: 14px;
        background-color: #000;
        transform: translateX(-16px);
      }
    }

    :last-child {
      gap: 14px;
    }
  }
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  padding-top: 30px;
  color: ${(props) => props.theme.color.gray100};

  p:nth-child(1) {
    font-weight: 700;
  }
`;
