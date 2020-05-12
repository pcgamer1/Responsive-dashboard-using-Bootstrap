var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun"],
    datasets: [{
      label: 'data-1',
      data: [12, 19, 3, 17, 28, 24, 7],
      backgroundColor: "#EF2D56"
    }, {
      label: 'data-2',
      data: [30, 29, 5, 5, 20, 3, 10],
      backgroundColor: "#ED7D3A"
    }]
  }
});