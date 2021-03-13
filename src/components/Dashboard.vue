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
        <component
          :is="chart.type"
          :chartData="chart.chartData"
          :options="chart.options"
          class="chartComponent"
        ></component>
      </grid-item>
    </grid-layout>
  </v-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"
import { getClosingData, getCurrentPrice } from "../api"
import LineChart from "../components/LineChart"
import InfoBox from "../components/InfoBox"
import Error from "../components/Error"

export default {
  name: "Dashboard",
  components: {
    GridLayout,
    GridItem,
    LineChart,
    InfoBox,
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
    const [closingData, currentPrice] = await Promise.allSettled([
      getClosingData(),
      getCurrentPrice()
    ])
    this.chartItems = [
      this.generateChartComponentData(closingData, "0"),
      this.generateInfoComponentData(currentPrice, "1")
    ]
    this.loaded = true
  },
  methods: {
    generateChartComponentData: (data, index) => {
      return data.status === "fulfilled"
        ? {
            chartData: {
              labels: Object.keys(data.value),
              datasets: [
                {
                  label: "2019",
                  data: Object.values(data.value),
                  backgroundColor: "rgba(224, 248, 255, 0.4)",
                  borderColor: "#5cddff",
                  lineTension: 0,
                  pointBackgroundColor: "#5cddff"
                }
              ]
            },
            options: {
              elements: {
                point: {
                  radius: 1
                }
              },
              scales: {
                xAxes: [
                  {
                    stacked: true,
                    gridLines: { display: true }
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
            },
            type: "line-chart",
            x: 0,
            y: 0,
            w: 18,
            h: 11,
            minW: 5,
            minH: 11,
            i: index
          }
        : {
            type: "error",
            x: 0,
            y: 0,
            w: 5,
            h: 5,
            minW: 2,
            minH: 2,
            i: index
          }
    },
    generateInfoComponentData: (data, index) => {
      return data.status === "fulfilled"
        ? {
            x: 0,
            y: 0,
            w: 5,
            h: 3,
            minW: 5,
            minH: 3,
            i: index,
            chartData: data.value,
            type: "info-box"
          }
        : {
            type: "error",
            x: 0,
            y: 0,
            w: 5,
            h: 5,
            minW: 2,
            minH: 2,
            i: index
          }
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
.chartComponent {
  cursor: default;
}
</style>
