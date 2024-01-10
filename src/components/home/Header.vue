<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <div class="search-wrapper">
      <input type="text" v-model="search" />
      <button @click="handleSearch">Search</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieHeader",
  props: {
    title: {
      type: String,
      default: "Movie",
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.search);
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-wrapper {
  display: flex;
  align-items: center;
}
</style>
