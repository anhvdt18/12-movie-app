import React from "react";
import LoginPage from "../pages/LoginPage";
import { Container } from "@mui/material";

function BlankLayout() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <LoginPage />
    </Container>
  );
}

export default BlankLayout;
