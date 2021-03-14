/**
 * The following functions are helpers to create the settings (props) required for creating the grid items
 */

/**
 * Generates required settings for a line-chart
 * @param {object} data Dictionary containing dates and their values (BPI value)
 * @param {string} index Index of chart in the dashboard
 * @returns Settings (required props) for a line-chart component
 */
const generateLineChartDataAndSettings = (data, index) => ({
  chartData: {
    labels: Object.keys(data),
    datasets: [
      {
        label: "",
        data: Object.values(data),
        backgroundColor: "rgba(100, 140, 172, 0.4)",
        borderColor: "#1C4C64",
        lineTension: 0,
        pointBackgroundColor: "#1C4C64"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Bitcoin Price Index for the Year 2019"
    },
    elements: {
      point: {
        radius: 1
      }
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "month",
            displayFormats: {
              month: "MMM"
            }
          },
          ticks: {
            source: "auto"
          },
          gridLines: { display: true },
          scaleLabel: {
            display: true,
            labelString: "2019"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            callback: function(value) {
              return value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })
            }
          },
          scaleLabel: {
            display: true,
            labelString: "Bitcoin Price Index as USD ($)"
          }
        }
      ]
    },
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false,
      mode: "nearest",
      displayColors: false,
      titleFontSize: 13,
      bodyFontSize: 13,
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.yLabel.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          })
        }
      }
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
})

/**
 * Generates required settings for a error-chart
 * @param {string} index Index of chart in the dashboard
 * @returns Settings (props) for an error-chart component
 */
const generateErrorChartItem = index => ({
  type: "error-chart",
  x: 0,
  y: 0,
  w: 5,
  h: 3,
  minW: 4,
  minH: 2,
  i: index
})

/**
 * Generates required settings for a current-price-chart
 * @param {object} data Dictionary where the key is the currency (EUR/GBP/USD)
 *                      and the values contain code, description, rate, rate_float, symbol
 * @param {string} index Index of chart in the dashboard
 * @param {string} title Title for the chart
 * @returns Settings (props) for a current-price-chart component
 */
const generateCurrentChartData = (data, index, title) => ({
  x: 0,
  y: 0,
  w: 5,
  h: 4,
  minW: 3,
  minH: 4,
  i: index,
  chartData: { data: data, title },
  type: "current-price-chart"
})

/**
 * Generates required settings for a previous-price-chart
 * @param {object} data Dictionary where the key is the current date and the value is the BPI (in dollars)
 * @param {string} index Index of chart in the dashboard
 * @param {string} title Title for the chart
 * @returns Settings (props) for a previous-price-chart component
 */
const generatePreviousChartData = (data, index, title) => ({
  x: 7,
  y: 12,
  w: 5,
  h: 4,
  minW: 3,
  minH: 4,
  i: index,
  chartData: { data: Object.values(data)[0], title },
  type: "previous-price-chart"
})

export {
  generateLineChartDataAndSettings,
  generateErrorChartItem,
  generateCurrentChartData,
  generatePreviousChartData
}
