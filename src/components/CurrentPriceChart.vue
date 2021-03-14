<template>
  <div class="info-box">
    <h2>{{ chartData.title }}</h2>
    <div
      v-for="currency in chartData.data"
      class="currency"
      :key="currency.code"
    >
      <strong>{{ currency.description }}</strong
      >:
      <span class="lighten">
        <span v-html="currency.symbol"></span
        >{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentPriceChart",
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
</style>
