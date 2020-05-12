//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July"],
datasets: [{
label: "My First dataset",
data: [65, 59, 80, 81, 56, 55, 40],
backgroundColor: [
'rgba(242, 145, 242, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "My Second dataset",
data: [28, 48, 40, 19, 86, 27, 90],
backgroundColor: [
'rgba(22, 181, 217, .2)',
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