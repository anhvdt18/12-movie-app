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
  const [rawMovieData, setRawMovieData] = useState();

  const defaultValues = {
    genres: [],
    searchQuery: "",
  };

  const methods = useForm({ defaultValues });
  const { watch, reset } = methods;
  const filters = watch();
  const filterMovies = applyFilter(movies, filters);

  const getMovies = async (filters) => {
    let URL = `${MOVIE_URL}?page=${page}`;
    for (const filter in filters) {
      if (filter === "genres") {
        URL += `&with_genres=${filters[filter].join(`,`)}`;
      }
      if (filter === "searchQuery") {
        URL += `&with_keywords=${filters[filter]}`;
      }
    }
    URL += `&${API_KEY}`;
    setLoading(true);
    try {
      const res = await axios({
        method: "get",
        url: URL,
      });
      setRawMovieData(res.data);
      setMovies(res.data.results);
      setError("");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies(filters);
    // eslint-disable-next-line
  }, [page, watch]);

  // Get genres data via Axios but reference from Coder Store

  //search and filter by genre:

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
      width="100%"
    >
      <Stack sx={{ minWidth: 250, p: 2 }} spacing={2}>
        <FormProvider methods={methods}>
          <MovieFilter genres={genres} resetFilter={reset} />
        </FormProvider>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        sx={{ minWidth: 250, width: "100%", p: 2 }}
      >
        <MovieList movies={filterMovies} page={page} />
        <FPages
          handleChange={handleChange}
          page={page}
          totalPages={rawMovieData ? rawMovieData.total_pages : 0}
        />
      </Stack>
    </Stack>
  );
}

export default HomePage;
