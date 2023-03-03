import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterWrapper, FooterNav, FooterAddress } from "./FooterStyle";

export default function Footer() {
  const youtubeImg = "assets/images/icon-yt.svg";
  const facebookImg = "assets/images/icon-fb.svg";
  const instagramImg = "assets/images/icon-insta.svg";

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterNav>
          <ul>
            <li>
              <Link to="/">호두샵 소개</Link>
            </li>
            <li>
              <Link to="/">이용약관</Link>
            </li>
            <li>
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/">전자금융거래약관</Link>
            </li>
            <li>
              <Link to="/">청소년보호정책</Link>
            </li>
            <li>
              <Link to="/">제휴문의</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">
                <img src={youtubeImg} alt="유튜브" />
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <img src={facebookImg} alt="페이스북" />
              </Link>
            </li>
            <li>
              <Link to="/">
                {" "}
                <img src={instagramImg} alt="인스타그램" />
              </Link>
            </li>
          </ul>
        </FooterNav>
        <FooterAddress>
          <p>(주)HODU SHOP</p>
          <p>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</p>
          <p>사업자 번호 : 000-0000-0000 | 통신판매업</p>
          <p>대표 : 김호두</p>
        </FooterAddress>
      </FooterContainer>
    </FooterWrapper>
  );
}
