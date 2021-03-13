<template>
  <v-container>
    <grid-layout
      :layout.sync="chartItems"
      :col-num="gridColumnNumer"
      :row-height="gridRowHeight"
      :is-draggable="isDraggable"
      :is-resizable="isResizable"
      :vertical-compact="true"
      :use-css-transforms="true"
      v-if="loaded"
    >
      <grid-item
        v-for="chart in chartItems"
        :key="chart.i"
        :x="chart.x"
        :y="chart.y"
        :w="chart.w"
        :h="chart.h"
        :i="chart.i"
        :minH="chart.minH"
        :minW="chart.minW"
      >
        <div class="chartWrapper">
          <component
            :is="chart.type"
            :chartData="chart.chartData"
            :options="chart.options"
            class="chartItem"
          ></component>
        </div>
      </grid-item>
    </grid-layout>
  </v-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"
import { getClosingData, getCurrentPrice, getPreviousDayPrice } from "../api"
import LineChart from "../components/LineChart"
import InfoBox from "../components/InfoBox"
import Error from "../components/Error"
import PriceBox from "../components/PriceBox"
import {
  generateLineChartDataAndSettings,
  generateBoxInfoData,
  generateErrorChartItem,
  generateBoxPriceData
} from "../utility"

export default {
  name: "Dashboard",
  components: {
    GridLayout,
    GridItem,
    LineChart,
    InfoBox,
    PriceBox,
    Error
  },

  data: () => ({
    gridColumnNumer: 12,
    gridRowHeight: 30,
    isDraggable: true,
    isResizable: true,
    chartItems: [],
    loaded: false
  }),
  async mounted() {
    const [
      closingData,
      currentPrice,
      previousDayPrice
    ] = await Promise.allSettled([
      getClosingData(),
      getCurrentPrice(),
      getPreviousDayPrice()
    ])
    this.chartItems = [
      this.generateChartComponentData(closingData, "0"),
      this.generateInfoComponentData(currentPrice, "1", "Current Price"),
      this.generatePriceComponentData(
        previousDayPrice,
        "2",
        "Yesterday's Price"
      )
    ]
    this.loaded = true
  },
  methods: {
    generateChartComponentData: (data, index) => {
      return data.status === "fulfilled"
        ? generateLineChartDataAndSettings(data.value, index)
        : generateErrorChartItem(index)
    },
    generateInfoComponentData: (data, index, title) => {
      return data.status === "fulfilled"
        ? generateBoxInfoData(data.value, index, title)
        : generateErrorChartItem(index)
    },
    generatePriceComponentData: (data, index, title) => {
      return data.status === "fulfilled"
        ? generateBoxPriceData(data.value, index, title)
        : generateErrorChartItem(index)
    }
  }
}
</script>

<style scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc;
  border: 1px solid black;
}

.vue-grid-item {
  background: #cce;
  touch-action: none;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.chartWrapper {
  padding: 1em;
}

.chartItem {
  cursor: default;
}
</style>
