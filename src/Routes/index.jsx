import React from "react";
import ErrorPage from "Pages/Error404";
import Home from "Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "Pages/Login";
import SignUp from "Pages/SignUp";

const NavigationRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="error" element={<ErrorPage />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavigationRouter;
