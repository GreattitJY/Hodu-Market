import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./404";
import HomePage from "./Home";
import LoginPage from "./Login";

export default function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
