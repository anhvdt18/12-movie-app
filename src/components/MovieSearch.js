import React from "react";
import FTextField from "./form/FTextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function MovieSearch() {
  return (
    <FTextField
      name="searchQuery"
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default MovieSearch;
