import { Typography } from "@mui/material";
import React from "react";

function HomeFooter() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" p={1}>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default HomeFooter;
