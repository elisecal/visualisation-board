<template>
  <div class="info-box">
    <h2>{{ chartData.title }}</h2>
    <div class="chart-details">
      <span> $ {{ chartData.data | currencydecimal }} </span>
    </div>
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
.info-box h2 {
  text-align: center;
}

.info-box .chart-details {
  text-align: center;
}

@media (max-width: 499px) {
  .info-box {
    font-size: 0.7rem;
  }
}
</style>
