<template>
  <div class="wrapper">
    <iframe
      width="100%"
      height="100%"
      frameBorder="0"
      :src="src"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
