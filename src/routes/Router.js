import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRequire from "./AuthRequire";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import BlankLayout from "../layouts/BlankLayout";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequire>
            <HomeLayout />
          </AuthRequire>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="movie/:id" element={<DetailPage />} />
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
