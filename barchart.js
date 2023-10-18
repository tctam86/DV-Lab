var dataset = []; // Initialize empty array
for (var i = 0; i < 20; i++) {
  //Loop 25 times
  var newNumber = Math.floor(Math.random() * 30); // New random number (0-30)
  dataset.push(newNumber); //Add new number to array
}

//Width and height
var w = 500;
var h = 150;
var barPadding = 1;

var svgB = d3
  .select("#barChart")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svgB
  .selectAll("rect")
  .data(dataset)

  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return i * (w / dataset.length);
  })
  .attr("y", function (d) {
    return h - d * 4; // Height minus data value
  })
  .attr("width", w / dataset.length - barPadding)
  .attr("height", function (d) {
    return d * 4;
  })
  .attr("fill", function (d) {
    return "rgb(0, 0, " + Math.round(d * 10) + ")";
  });

svgB
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function (d) {
    return d;
  })
  .attr("x", function (d, i) {
    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
  })
  .attr("y", function (d) {
    return h - d * 4 + 14;
  })
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white")
  .attr("text-anchor", "middle");
