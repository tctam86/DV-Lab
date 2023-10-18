function addEltToSVG(svg, name, attrs)
{
    var element = document.createElementNS("http://www.w3.org/2000/svg", name);
    if (attrs === undefined) attrs = {};
    for (var key in attrs) {
        element.setAttributeNS(null, key, attrs[key]);
    }
    svg.appendChild(element);
}

// window.onload = addEltToSVG(document.getElementById("histogram"), "rect", {x: 0, y: 150, width: 400, height: 1, fill: "black", stroke: "black"});
// window.onload = addEltToSVG(document.getElementById("histogram"), "rect", {x: 50, y: 110, width: 45, height: 40, fill: "blue", stroke: "black"});
// window.onload = addEltToSVG(document.getElementById("histogram"), "rect", {x: 140, y: 110, width: 45, height: 40, fill: "blue", stroke: "black"});
// window.onload = addEltToSVG(document.getElementById("histogram"), "rect", {x: 185, y: 60, width: 45, height: 90, fill: "blue", stroke: "black"});
function createHistogram(svg, str) {
  const bins = ["A-D", "E-H", "I-L", "M-P", "Q-U", "V-Z"];
  const binCounts = [0, 0, 0, 0, 0, 0];
  const letters = str.replace(/[^\w]/g, "").toUpperCase();
  for (let i = 0; i < letters.length; i++) {
    const letter = letters.charAt(i);
    if (letter >= "A" && letter <= "D") {
      binCounts[0]++;
    } else if (letter >= "E" && letter <= "H") {
      binCounts[1]++;
    } else if (letter >= "I" && letter <= "L") {
      binCounts[2]++;
    } else if (letter >= "M" && letter <= "P") {
      binCounts[3]++;
    } else if (letter >= "Q" && letter <= "U") {
      binCounts[4]++;
    } else if (letter >= "V" && letter <= "Z") {
      binCounts[5]++;
    }
  }
  const maxCount = Math.max(...binCounts);
  const barWidth = 50;
  const barHeight = 50;
  const margin = 10;
  const width = (barWidth + margin) * bins.length;
  const height = maxCount * barHeight + margin * 2;
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  for (let i = 0; i < bins.length; i++) {
    const binX = i * (barWidth + margin);
    const binY = height - margin - binCounts[i] * barHeight;
    const binHeight = binCounts[i] * barHeight;
    addEltToSVG(svg, "rect", {
      x: binX,
      y: binY,
      width: barWidth,
      height: binHeight,
      fill: "blue",
      stroke: "black"
    });
    addEltToSVG(svg, "text", {
      x: binX + barWidth / 2,
      y: height - margin / 2,
      "text-anchor": "middle",
      textContent: bins[i]
    });
  }
}

const svg = document.getElementById("histogram");
createHistogram(svg, "Tam");