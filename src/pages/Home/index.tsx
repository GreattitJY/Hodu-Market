import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import { useLocation } from "react-router";

export default function HomePage() {
  const isBuyer = useLocation().state?.isBuyer;

  return (
    <>
      <Header {...{ isBuyer }} />
      <Main />
      <Footer />
    </>
  );
}
