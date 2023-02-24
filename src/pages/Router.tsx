import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";

export default function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
