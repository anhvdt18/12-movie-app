import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Stack, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function FGenreList(genres) {
  // console.log(genres, "FGenreList");
  return (
    <div>
      {genres.genres.map((genre) => (
        <Stack
          direction="row"
          sx={{ display: "flex", alignItems: "center" }}
          key={genre.id}
        >
          <Checkbox {...label} defaultChecked />
          <Typography> {genre.name} </Typography>
        </Stack>
      ))}
    </div>
  );
}
