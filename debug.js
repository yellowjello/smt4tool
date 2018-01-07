var elementsRaces = ["Erthys", "Aeros", "Aquans", "Flaemis", "Gnome", "Sylph", "Undine", "Salamander"];

function verifyChart() {
	var fusionChartEN = [];
	// Copy array and convert to english
	console.log("R: " + fusionChart.length);
	for (var i = 0; i < fusionChart.length; i++) {
		var fusionRow = fusionChart[i];
		console.log("C: " + fusionRow.length);
		fusionChartEN.push(fusionRow.slice()); // copy row
		for (var j = 0; j < fusionRow.length; j++) {
			var cell = fusionRow[j];
			if (cell === "-") continue;
			if (tribeListJP.indexOf(cell) === -1) {
				console.log("oops " + cell);
			}
			var name = tribeListEN[tribeListJP.indexOf(cell)];
			fusionChartEN[i][j] = name;
		}
	}
	/*console.log(fusionChartEN[0][0] + " " + fusionChart[0][0]);
	console.log(fusionChartEN[44][44] + " " + fusionChart[44][44]);
	console.log(fusionChartEN[0][44] + " " + fusionChart[0][44]);
	console.log(fusionChartEN[44][0] + " " + fusionChart[44][0]);*/
	// For every entry that is not element or no fusion, check reference to see if correct
	var refRaces = referenceChart["races"];
	var refTable = referenceChart["table"];

	for (var i = 0; i < refRaces.length; i++) {
		for (var j = i; j < refRaces.length; j++) {
			var raceA = refRaces[i];
			var raceB = refRaces[j];
			var result = refTable[i][j-i];
			var isElem = false;
			if (elementsRaces.indexOf(result) !== -1) isElem = true;
			var raceAInd = tribeListEN.indexOf(raceA);
			if (raceAInd === -1) console.log("raceA " + raceA);
			var raceBInd = tribeListEN.indexOf(raceB);
			if (raceBInd === -1) console.log("raceB " + raceB);
			// Forward
			if (fusionChartEN[raceAInd][raceBInd] !== result) {
				if (!isElem || fusionChartEN[raceAInd][raceBInd] !== "Element") {
					//console.log(raceA + " " + raceAInd + " " + raceB + " " + raceBInd);
					console.log(raceA + " + " + raceB + " gives " + fusionChartEN[raceAInd][raceBInd] + " should give " + result);
					// Fix
					if (result === "-") fusionChart[raceAInd][raceBInd] = "-";
					else {
						if (isElem) result = "Element";
						var resultInd = tribeListEN.indexOf(result);
						if (resultInd === -1) console.log("Uh oh: " + result);
						fusionChart[raceAInd][raceBInd] = tribeListJP[resultInd];
					}
				}
			}
			// Backward
			if (fusionChartEN[raceBInd][raceAInd] !== result) {
				if (!isElem || fusionChartEN[raceBInd][raceAInd] !== "Element") {
					//console.log(raceB + " " + raceBInd + " " + raceA + " " + raceAInd);
					console.log(raceB + " + " + raceA + " gives " + fusionChartEN[raceBInd][raceAInd] + " should give " + result + " B");
					// Fix
					if (result === "-") fusionChart[raceBInd][raceAInd] = "-";
					else {
						if (isElem) result = "Element";
						var resultInd = tribeListEN.indexOf(result);
						if (resultInd === -1) console.log("Uh oh: " + result);
						fusionChart[raceBInd][raceAInd] = tribeListJP[resultInd];
					}
				}
			}
		}
	}
}

// Prints JS code to for chart
function printChartCode() {
	var text = "";
	text += "fusionChart = [\n";
	for (var i = 0; i < fusionChart.length; i++) {
		text += "[";
		for (var j = 0; j < fusionChart.length; j++) {
			text += "\"" + fusionChart[i][j] + "\"";
			if (j < fusionChart.length - 1) text += ", ";
		}
		text += "]";
		if (i < fusionChart.length - 1) text += ",";
		text += "\n";
	}
	text += "];";
	console.log(text);
}

function verifyDemons() {
	// Build original name set
	var origNames = new Set();
	Object.values(demonByNameEN).forEach(function(data) {
		origNames.add(data.nameEN);
	});
	// Name set from reference
	var refNames = new Set();
	Object.keys(referenceDemons).forEach(function(name) {
		refNames.add(name);
	});
	console.log("Checking for names not in reference...");
	for (let name of origNames) {
		if (!refNames.has(name)) console.log(name + " not in reference");
	}
	console.log("Checking for reference names not in database...");
	for (let name of refNames) {
		if (!origNames.has(name)) console.log(name + " not in database");
	}
}