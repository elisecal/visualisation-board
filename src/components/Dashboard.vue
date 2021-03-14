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
        :style="getGridItemBackground(chart.type)"
      >
        <div class="chart-wrapper">
          <component
            :is="chart.type"
            :chartData="chart.chartData"
            :options="chart.options"
            class="chart-item"
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
import CurrentPriceChart from "../components/CurrentPriceChart"
import PreviousPriceChart from "../components/PreviousPriceChart"
import ErrorChart from "../components/ErrorChart"
import {
  generateLineChartDataAndSettings,
  generateCurrentChartData,
  generateErrorChartItem,
  generatePreviousChartData
} from "../helpers/chartGenerationHelper"

export default {
  name: "Dashboard",
  components: {
    GridLayout,
    GridItem,
    LineChart,
    CurrentPriceChart,
    PreviousPriceChart,
    ErrorChart
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
    //get the information required to generate charts
    const [
      closingData,
      currentPrice,
      previousDayPrice
    ] = await Promise.allSettled([
      getClosingData(),
      getCurrentPrice(),
      getPreviousDayPrice()
    ])

    //create the settings for the chart items
    this.chartItems = [
      this.generateChartComponentData(closingData, "0"),
      this.generateCurrentChartComponentData(
        currentPrice,
        "1",
        "Current Price"
      ),
      this.generatePrevioustChartComponentData(
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
    generateCurrentChartComponentData: (data, index, title) => {
      return data.status === "fulfilled"
        ? generateCurrentChartData(data.value, index, title)
        : generateErrorChartItem(index)
    },
    generatePrevioustChartComponentData: (data, index, title) => {
      return data.status === "fulfilled"
        ? generatePreviousChartData(data.value, index, title)
        : generateErrorChartItem(index)
    },
    getGridItemBackground(chartType) {
      return {
        background: chartType === "line-chart" ? "#FFF" : "#1C4C74"
      }
    }
  }
}
</script>

<style scoped>
.vue-grid-item {
  touch-action: none;
  display: block;
  border-radius: 6px;
  color: white;
  box-shadow: 0 0 40px rgba(226, 226, 226, 0.5);
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.chart-wrapper {
  padding: 1em;
}

.chart-item {
  cursor: default;
}
</style>
