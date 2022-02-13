// Todas las rutas que requiren auth

import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { NotFound } from "../components/NotFound/NotFound";

export const AuthRouter = () => {
  return (
    <>
      <div className="auth__main">
        <div className="auth__box-container">
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        
      </div>
    </>
  );
};
