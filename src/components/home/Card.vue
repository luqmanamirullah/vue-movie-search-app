<template>
  <b-card
    overlay
    :img-src="img"
    :img-alt="title"
    text-variant="white"
    class="additional"
  >
  </b-card>
</template>
<script>
export default {
  name: "MovieCard",
  props: {
    img: {
      type: String,
      default: "https://picsum.photos/200/400",
    },
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>
<style scoped>
.additional {
  background-color: transparent;
  overflow: hidden;
  border-radius: 2px;
  width: 100%;
  height: 100%;
}
</style>
