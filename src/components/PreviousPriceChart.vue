<template>
  <div class="text-center info-box">
    <h2>{{ chartData.title }}</h2>
    <span> $ {{ chartData.data | currencydecimal }} </span>
  </div>
</template>

<script>
export default {
  name: "PreviousPriceChart",
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2)
    }
  }
}
</script>

<style scoped>
@media (max-width: 499px) {
  .info-box {
    font-size: 0.7rem;
  }
}
</style>
