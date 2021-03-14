<script>
import Chart from "chart.js"
import { generateChart } from "vue-chartjs"

// followed example from https://stackoverflow.com/questions/45159895/moving-vertical-line-when-hovering-over-the-chart-using-chart-js
Chart.defaults.LineWithLine = Chart.defaults.line
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw: function(ease) {
    Chart.controllers.line.prototype.draw.call(this, ease)

    if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
      var activePoint = this.chart.tooltip._active[0],
        ctx = this.chart.ctx,
        x = activePoint.tooltipPosition().x,
        topY = this.chart.legend.bottom,
        bottomY = this.chart.chartArea.bottom

      // draw line
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(x, topY)
      ctx.lineTo(x, bottomY)
      ctx.lineWidth = 2
      ctx.strokeStyle = "#648cac"
      ctx.stroke()
      ctx.restore()
    }
  }
})

const CustomLine = generateChart("line-chart", "LineWithLine")

export default {
  extends: CustomLine,
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
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style></style>
