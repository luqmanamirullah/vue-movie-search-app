<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MovieNavbar @search="(s) => (search = s)" />
    <main class="main--home">
      <section class="search--home" v-show="search.length">
        <SearchList :data="searchData" v-show="searchData.length > 0" />
      </section>
      <section class="banner--home" v-show="!search.length">
        <YoutubePlayer
          v-if="banner.key"
          :src="
            'https://www.youtube.com/embed/' +
            banner.key +
            '?autoplay=1&mute=1&loop=1&controls=0'
          "
        />
        <div class="layer--banner shade-bottom bottom"></div>
      </section>
      <section class="collections--home" v-show="!search.length">
        <MovieList
          :data="movieNew"
          v-show="movieNew.length > 0"
          :title="'Movie New & Popular'"
        />
        <MovieList
          :data="tvNew"
          v-show="tvNew.length > 0"
          :title="'Tv Show New & Popular'"
        />
        <MovieList
          :is-top-list="true"
          :data="topTv"
          v-show="topTv.length > 0"
          :title="'Top 10 Tv Shows in Netflix'"
        />
        <MovieList
          :data="anime"
          v-show="anime.length > 0"
          :title="'Tv Shows Based on Manga'"
        />
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import YoutubePlayer from "@/components/YoutubePlayer.vue";
import MovieList from "@/components/home/List.vue";
import MovieNavbar from "@/components/home/Navbar.vue";
import SearchList from "@/components/home/SearchList.vue";
import { AlertUtils } from "@/mixins/AlertUtils";
import {
  findMulti,
  getNewMovies,
  getNewTvShows,
  getTopTv,
  getTrailer,
  getTvByGenre,
} from "@/services/movie/movie.service";
export default {
  name: "HomeView",
  data() {
    return {
      search: "",
      banner: {
        /**
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Official Trailer [ENG SUB]",
            "key": "V5YbzU3aGDE",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": true,
            "published_at": "2023-12-07T00:00:00.000Z",
            "id": "657134de85867800ad536771"
         */
      },

      // ==============Film DATA EXAMPLE================
      /**
            {
               "adult": false,
              "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
              "genre_ids": [
                28,
                35
              ],
              "id": 1029575,
              "original_language": "en",
              "original_title": "The Family Plan",
              "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
              "popularity": 3089.182,
              "poster_path": "/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
              "release_date": "2023-12-14",
              "title": "The Family Plan",
              "video": false,
              "vote_average": 7.397,
              "vote_count": 634
            }
      */
      searchData: [],
      movieNew: [],
      tvNew: [],
      topTv: [],
      anime: [],
    };
  },
  mixins: [AlertUtils],
  components: {
    MovieNavbar,
    MovieList,
    SearchList,
    YoutubePlayer,
  },

  methods: {
    getCollections() {
      getTrailer("tv", this.topTv[0]?.id ?? 135238)
        .then((res) => {
          this.banner = res;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          this.alertFail(err);
        });
      getNewMovies()
        .then((res) => {
          console.log(res);
          this.movieNew = res.results;
        })
        .catch((err) => {
          console.log(err);
          this.alertFail(err);
        });
      getNewTvShows()
        .then((res) => {
          console.log(res);
          this.tvNew = res.results;
        })
        .catch((err) => {
          console.log(err);
          this.alertFail(err);
        });
      getTopTv()
        .then((res) => {
          console.log("toptv", res.results.slice(0, 10));
          this.topTv = res.results.slice(0, 10);
        })
        .catch((err) => {
          console.log(err);
          this.alertFail(err);
        });
      getTvByGenre(16)
        .then((res) => {
          console.log(res);
          this.anime = res.results;
        })
        .catch((err) => {
          console.log(err);
          this.alertFail(err);
        });
    },
  },
  watch: {
    search(val) {
      if (val.length > 0) {
        findMulti({
          query: val,
          page: 1,
          include_adult: false,
          language: "en-US",
        })
          .then((res) => {
            console.log(
              res.results.filter(
                (item) =>
                  (item.poster_path || item.backdrop_path) &&
                  (item.media_type === "movie" || item.media_type === "tv")
              )
            );
            this.searchData = res.results.filter(
              (item) =>
                (item.poster_path || item.backdrop_path) &&
                (item.media_type === "movie" || item.media_type === "tv")
            );
          })
          .catch((err) => {
            console.log(err);
            this.alertFail(err);
          });
      }
    },
  },
  mounted() {
    this.getCollections();
  },
};
</script>
<style scoped>
.home {
  background: #1d232a;
}

.main--home {
  color: #fff;
  min-height: 100vh;
}

.collections--home {
  padding: 85dvh 0 2rem 0;
}

.search--home {
  padding: 5rem 0 2rem 0;
}

.banner--home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
}

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
}

.layer--banner {
  z-index: 1;
  width: 100%;
  height: 25dvh;
}

.shade-bottom {
  background-image: linear-gradient(
    to top,
    rgba(29, 35, 42, 0.713) 0%,
    rgba(29, 35, 42, 0) 90%
  );
}
</style>
