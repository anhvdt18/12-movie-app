import React from "react";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

function HomeLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </Stack>
  );
}

export default HomeLayout;
