// axios instance

import { base_url_movie, tmdb_access_token } from "@/config/base_url";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: base_url_movie,
  headers: {
    Authorization: "Bearer " + tmdb_access_token,
    Accept: "application/json",
  },
});

export default axiosInstance;
