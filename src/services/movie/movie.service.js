import axiosInstance from "@/config/axios";
import { queryToUrl } from "@/helper/string";
import apiRoute from "../api.route";

export async function getNewMovies(language = "en-US", page = 1) {
  const q = `?language=${language}&page=${page}`;
  return axiosInstance
    .get(`${apiRoute.movieNew}${q}`)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((error) => {
      const data = {
        status: false,
        response: error.response,
      };
      return data;
    });
}

export async function getNewTvShows(language = "en-US", page = 1) {
  const q = `?language=${language}&page=${page}`;
  return axiosInstance
    .get(`${apiRoute.tvNew}${q}`)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((error) => {
      const data = {
        status: false,
        response: error.response,
      };
      return data;
    });
}
const _discoverQuery = {
  include_adult: false,
  include_null_first_air_dates: false,
  language: "en-US",
  page: 1,
  sort_by: "popularity.desc",
  with_networks: 213,
};
export async function getTopTv(query = _discoverQuery) {
  query.with_origin_country = "KR";
  const q = queryToUrl(query);
  return axiosInstance
    .get(`${apiRoute.discoverTv}?${q}`)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((error) => {
      const data = {
        status: false,
        response: error.response,
      };
      return data;
    });
}
export async function getTvByGenre(genre) {
  const query = {
    ..._discoverQuery,
    with_origin_country: "JP",
    sort_by: "primary_release_date.desc",
    with_genres: genre,
  };
  const q = queryToUrl(query);
  return axiosInstance
    .get(`${apiRoute.discoverTv}?${q}`)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((error) => {
      const data = {
        status: false,
        response: error.response,
      };
      return data;
    });
}

export async function findMulti(query) {
  const q = queryToUrl(query);
  return axiosInstance
    .get(`${apiRoute.searchMulti}?${q}`)
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((error) => {
      const data = {
        status: false,
        response: error.response,
      };
      return data;
    });
}

export async function getTrailer(type = "movie", id) {
  return axiosInstance
    .get(`${type}/${id}/videos?language=en-US`)
    .then((res) => {
      const data = res.data.results.filter(
        (item) => item.type === "Trailer"
      )[0];
      if (!data) return res.data.results[0];
      return data;
    })
    .catch((error) => {
      const data = {
        status: false,
        response: error.response,
      };
      return data;
    });
}
