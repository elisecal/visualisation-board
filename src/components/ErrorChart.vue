<template>
  <p class="error-box">
    There has been an error while loading this chart. Please try again later..
  </p>
</template>

<script>
export default {
  name: "ErrorChart"
}
</script>

<style scoped>
@media (max-width: 499px) {
  .error-box {
    font-size: 0.7rem;
  }
}
</style>
