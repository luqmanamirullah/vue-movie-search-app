<template>
  <div class="container">
    <div class="row row-cols-5 gx-4 gy-5">
      <div v-for="(movie, index) in data" :key="index" class="col card--search">
        <MovieCard
          :img="
            movie.backdrop_path !== null
              ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
              : 'https://image.tmdb.org/t/p/w500' + movie.poster_path
          "
          :title="movie.title || movie.name"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MovieCard from "./Card.vue";
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    MovieCard,
  },
};
</script>
<style scoped>
.card--search {
  height: 135px;
  border: none;
}
</style>
