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
          gridLines: { display: true }
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
