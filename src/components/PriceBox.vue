<template>
  <div class="info-box">
    <h2>{{ chartData.title }}</h2>
    <div>
      <span> $ {{ chartData.data }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.info-box h2 {
  text-align: center;
}
</style>
