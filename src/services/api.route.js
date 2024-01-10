class ApiRoute {
  constructor() {
    // Version 1.0

    this.movieNew = "movie/now_playing";
    this.tvNew = "tv/on_the_air";
    this.discoverTv = "discover/tv";
    this.discoverMovie = "discover/movie";
    this.searchMovie = "search/movie";
    this.searchTv = "search/tv";
    this.searchMulti = "search/multi";
  }
}

export default new ApiRoute();
