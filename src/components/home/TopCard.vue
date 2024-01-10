<template>
  <div class="card">
    <RankIcon :rank="rank" />
    <img :src="img" fluid :alt="title" class="cover" />
  </div>
</template>
<script>
import RankIcon from "./RankIcon.vue";

// import RankIcon from "./RankIcon.vue";
export default {
  name: "TopMovieCard",
  props: {
    rank: {
      type: Number,
      default: 1,
    },
    img: {
      type: String,
      default: "https://picsum.photos/200/400",
    },
    title: {
      type: String,
      default: "Title",
    },
  },
  components: {
    RankIcon,
  },
};
</script>
<style scoped>
.card {
  background-color: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: none;
  justify-content: center;
  border-radius: 2px;
  width: 100%;
  height: 100%;
}
.icon {
  width: auto;
  height: 100%;
  text-align: center;
}
.cover {
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 10%;
  width: auto;
  height: 100%;
  object-fit: cover;
}
</style>
