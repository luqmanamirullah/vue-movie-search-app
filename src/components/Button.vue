<template>
  <button @click="$emit('handler-click')" class="btn-general">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ButtonCount",
  props: {
    text: String,
  },
};
</script>
