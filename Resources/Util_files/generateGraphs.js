
var url_string = window.location.href;
var url = new URL(url_string);
var pname = url.searchParams.get("pname");
console.log(pname);

var usageResults = returnUsage();
console.log(usageResults)
console.log(usageResults[pname])

var x = [];
var y = [];
for (var i = 0; i < 24; i++) {
	console.log(usageResults[pname][i].Jobs)
	y[i] = usageResults[pname][i].Jobs / 7
	x[i] = i;
}


console.log(x)
console.log(y)
var trace = {
    x: x,
	y: y,
    type: 'bar',
};
var data = [trace];

var layout = {
  title: 'Weekly Printer Usage For ',
  xaxis: {
    title: 'Time',
  },
  yaxis: {
    title: 'Average Number of Jobs',

  }
};

layout.title += pname + ':'
Plotly.newPlot('myDiv', data, layout);