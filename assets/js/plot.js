//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July"],
datasets: [{
label: "My First dataset",
data: [65, 59, 81, 62, 45, 55, 40],
backgroundColor: [
'rgba(255, 255, 255, 0)',
],
pointBackgroundColor: [
'rgba(255, 255, 255, 0)',
],
pointColor: [
'rgba(255, 255, 255, 0)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "My Second dataset",
data: [28, 65, 45, 76, 55, 40, 21],
backgroundColor: [
'rgba(255, 255, 255, 0)',
],
borderColor: [
'rgba(0, 10, 130, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});