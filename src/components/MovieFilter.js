import React from "react";
import { Box, Button, Stack } from "@mui/material";
import FMultiCheckbox from "./form/FMultiCheckbox";
import MovieSearch from "./MovieSearch";

function MovieFilter(genres, resetFilter) {
  const SORT_BY_GENRES = [...genres.genres];

  return (
    <Stack spacing={2}>
      <MovieSearch />
      <FMultiCheckbox
        name="genres"
        options={SORT_BY_GENRES}
        sx={{ width: 0 }}
      />
      <Box>
        <Button
          size="large"
          type="submit"
          color="inherit"
          variant="outlined"
          onClick={() => resetFilter}
        >
          Reset
        </Button>
      </Box>
    </Stack>
  );
}

export default MovieFilter;
