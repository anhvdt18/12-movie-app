import { Paper, Typography, styled, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const API_KEY = "api_key=3837983d9f8dc7b4e1d46584eb9210d1";

  const [movie, setMovie] = useState("");
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState("");
  // const [movieId, setMovieId] = useState("573435");

  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      try {
        const URL = `https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}`;
        const results = await fetch(URL);
        const data = await results.json();
        setMovie(data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMovie();
    // eslint-disable-next-line
  }, []);

  const Img = styled("img")({
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Paper
      sx={{
        width: "70vw",
        height: "70vh",
        background: "ivory",
        alignSelf: "center",
        padding: 2,
        m: "auto",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item display="flex" alignItems="center">
          <Img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            sx={{ maxHeight: 400 }}
          />
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: 30 }}>{movie.title}</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: 16 }}>{movie.overview}</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: 16 }}>
            Release Date: {movie.release_date}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DetailPage;
