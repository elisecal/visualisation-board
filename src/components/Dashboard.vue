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
      >
        <span class="text">{{ chart.i }}</span>
      </grid-item>
    </grid-layout>
  </v-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"

export default {
  name: "Dashboard",
  components: {
    GridLayout,
    GridItem
  },

  data: () => ({
    gridColumnNumer: 12,
    gridRowHeight: 30,
    isDraggable: true,
    isResizable: true,
    chartItems: [
      { x: 0, y: 0, w: 2, h: 2, i: "0" },
      { x: 2, y: 0, w: 2, h: 4, i: "1" },
      { x: 4, y: 0, w: 2, h: 5, i: "2" }
    ]
  })
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
