import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <Grid container spacing={0.5} sx={{ display: "flex", width: "100%" }}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={8} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
