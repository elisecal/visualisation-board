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
        <line-chart
          v-if="loaded"
          :chartData="chartData"
          :options="options"
        ></line-chart>
      </grid-item>
    </grid-layout>
  </v-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"
import { getClosingData } from "../api"
import LineChart from "../components/LineChart"

export default {
  name: "Dashboard",
  components: {
    GridLayout,
    GridItem,
    LineChart
  },

  data: () => ({
    gridColumnNumer: 12,
    gridRowHeight: 30,
    isDraggable: true,
    isResizable: true,
    chartItems: [
      // { x: 0, y: 0, w: 2, h: 2, i: "0" },
      // { x: 2, y: 0, w: 2, h: 4, i: "1" },
      // { x: 4, y: 0, w: 2, h: 5, i: "2" }
    ],
    closingData: null,
    loaded: false
  }),
  async mounted() {
    const [closingData] = await Promise.allSettled([getClosingData()])
    this.chartItems = [
      {
        value: closingData.value,
        x: 0,
        y: 0,
        w: 18,
        h: 11,
        minW: 5,
        minH: 11,
        i: "0"
      }
    ]
    this.chartData = this.generateChartData(closingData.value)
    this.options = this.generateChartOptions()
    this.loaded = true
  },
  methods: {
    generateChartData: data => ({
      labels: Object.keys(data),
      datasets: [
        {
          label: "2019",
          data: Object.values(data),
          backgroundColor: "rgba(224, 248, 255, 0.4)",
          borderColor: "#5cddff",
          lineTension: 0,
          pointBackgroundColor: "#5cddff"
        }
      ]
    }),
    generateChartOptions: () => ({
      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: { display: false }
          }
        ],
        yAxes: [
          {
            ticks: {
              stepSize: 1,
              callback: function(value, index, values) {
                if (value % Math.round(values[0] / 6) == 0) {
                  return value
                } else if (value === 0) {
                  return value
                }
              }
            }
          }
        ]
      },
      maintainAspectRatio: false,
      legend: {
        labels: {
          boxWidth: 10
        },
        position: "top"
      },
      animation: {
        duration: 200,
        easing: "easeInOutQuart"
      }
    })
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
</style>
