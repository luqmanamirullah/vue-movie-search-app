<template>
  <!-- Slider main container -->
  <div ref="swiper" class="swiper">
    <h5 class="title--swiper">{{ title }}</h5>
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide" v-for="(movie, index) in data" :key="index">
        <TopCard
          :rank="index + 1"
          :img="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          :title="movie.title || movie.name"
          v-if="isTopList"
        />
        <MovieCard
          :img="'https://image.tmdb.org/t/p/w500' + movie.backdrop_path"
          :title="movie.title || movie.name"
          v-else
        />
      </div>
    </div>
    <!-- pagination -->
    <div class="swiper-pagination"></div>

    <!-- navigation buttons -->
    <div class="swiper-button-prev">
      <b-icon icon="chevron-left" class="text-secondary h1"></b-icon>
    </div>
    <div class="swiper-button-next">
      <b-icon icon="chevron-right" class="text-secondary h1"></b-icon>
    </div>

    <!-- side layer -->
    <div class="layer--swiper shade-right left"></div>
    <div class="layer--swiper shade-left right"></div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCard from "./Card.vue";
import TopCard from "./TopCard.vue";

export default {
  name: "MovieList",
  props: {
    isTopList: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "New & Popular",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    MovieCard,
    TopCard,
  },
  updated() {
    console.log("updated");
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],

      slidesPerView: 5,
      spaceBetween: 10,
      slidesPerGroup: 5,
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>
<style>
.swiper-pagination-bullet {
  border-radius: 0;
  width: 10px;
  height: 2px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  opacity: 1;
  background: rgb(23, 23, 23);
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
<style scoped>
.swiper {
  width: 100%;
  height: 240px;
  padding: 3rem 4rem;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  top: 10px;
  text-align: end;
  padding: 0 4rem;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

.left {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}

.layer--swiper {
  z-index: 1;
  width: 3.5rem;
  height: 160px;
}

.shade-right {
  background-image: linear-gradient(
    to right,
    rgba(29, 35, 42, 0.713) 0%,
    rgba(29, 35, 42, 0) 90%
  );
}

.shade-left {
  background-image: linear-gradient(
    to left,
    rgba(29, 35, 42, 0.713) 0%,
    rgba(29, 35, 42, 0) 90%
  );
}
.title--swiper {
  position: absolute;
  top: 0;
  left: 0;
  color: #d0cecec4;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: start;
  margin-left: 4rem;
  padding-bottom: 2rem;
}
</style>
