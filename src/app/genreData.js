import axios from "axios";
import { GENRE_URL, API_KEY } from "./config";

const genreData = axios.create({
  baseURL: GENRE_URL + `?` + API_KEY,
});

genreData.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

genreData.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default genreData;
