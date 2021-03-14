const generateLineChartDataAndSettings = (data, index) => ({
  chartData: {
    labels: Object.keys(data),
    datasets: [
      {
        label: "2019",
        data: Object.values(data),
        backgroundColor: "rgba(100, 140, 172, 0.4)", //rgba(67, 27, 40, 0.4)
        borderColor: "#1C4C64",
        lineTension: 0,
        pointBackgroundColor: "#1C4C64"
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
})

const generateErrorChartItem = index => ({
  type: "error",
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
