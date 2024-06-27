import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
// import { movieData, baseURL } from "../app/movieData";
import genreData from "../app/genreData";
import FPages from "../components/form/FPages";
import { Stack } from "@mui/material";
import { API_KEY, MOVIE_URL } from "../app/config";
import axios from "axios";
import { useForm } from "react-hook-form";
import MovieFilter from "../components/MovieFilter";
import FormProvider from "../components/form/FormProvider";

function HomePage() {
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [genres, setGenres] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(movies);
  // get movie data via Axios:
  const movieData = axios.create({
    baseURL: MOVIE_URL + `?page=${page}&` + API_KEY,
  });

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const res = await movieData.get("");
        setMovies(res.data.results);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getMovies();
    // eslint-disable-next-line
  }, [page]);

  // Get genres data via Axios but reference from Coder Store

  //search and filter by genre:
  const defaultValues = {
    genres: [],
    searchQuery: "",
  };

  const methods = useForm({ defaultValues });
  const { watch, reset } = methods;
  const filters = watch();
  const filterMovies = applyFilter(movies, filters);

  // const a = 10;
  // const b = "10";

  // if (a === b) {
  //   console.log(true, "see result here");
  // } else {
  //   console.log(false, "see result here");
  // }

  function applyFilter(movies, filters) {
    let filteredMovies = movies;

    if (filters.genres && filters.genres.length > 0) {
      filteredMovies = movies.filter((movie) =>
        filters.genres.some((value) => movie.genre_ids.includes(value))
      );
    }

    if (filters.searchQuery) {
      filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    return filteredMovies;
  }

  useEffect(() => {
    const getGenres = async () => {
      setLoading(true);
      try {
        const res = await genreData.get("");
        setGenres(res.data.genres);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };
    getGenres();
  }, []);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Stack sx={{ minWidth: 250, p: 2 }} spacing={2}>
        <FormProvider methods={methods}>
          <MovieFilter genres={genres} resetFilter={reset} />
        </FormProvider>
      </Stack>
      <Stack direction="column" spacing={2} sx={{ minWidth: 250, p: 2 }}>
        <MovieList movies={filterMovies} page={page} />
        <FPages handleChange={handleChange} page={page} />
      </Stack>
    </Stack>
  );
}

export default HomePage;
