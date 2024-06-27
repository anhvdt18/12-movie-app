import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function FPages({ page, handleChange }) {
  return (
    <Stack margin={(5, 10, 2, 2)} spacing={2}>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          count={10}
          color="primary"
          page={page}
          onChange={handleChange}
        />
        {/* <Pagination count={10} disabled /> */}
      </Box>
    </Stack>
  );
}
