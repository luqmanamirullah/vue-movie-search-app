<template>
  <div class="rank">
    <i :class="rankIcon" class="icon"></i>
  </div>
</template>
<script>
export default {
  props: {
    rank: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    rankIcon() {
      if (this.rank === 1) {
        return "bi bi-1-circle";
      } else if (this.rank === 2) {
        return "bi bi-2-circle";
      } else if (this.rank === 3) {
        return "bi bi-3-circle";
      } else if (this.rank === 4) {
        return "bi bi-4-circle";
      } else if (this.rank === 5) {
        return "bi bi-5-circle";
      } else if (this.rank === 6) {
        return "bi bi-6-circle";
      } else if (this.rank === 7) {
        return "bi bi-7-circle";
      } else if (this.rank === 8) {
        return "bi bi-8-circle";
      } else if (this.rank === 9) {
        return "bi bi-9-circle";
      } else if (this.rank === 10) {
        return "bi bi-1-circle";
      } else {
        return "badge";
      }
    },
  },
};
</script>
<style scoped>
.icon {
  font-size: 8rem;
  -webkit-text-stroke: 2px rgba(161, 161, 161, 0.713) !important;
  -webkit-text-fill-color: rgb(20, 19, 19);
  text-align: center;
}
.rank {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}
</style>
