(function() {

	function calculateScaleScore() {
		var rawScore = 0;

		var width = graph.width.baseVal.value;
		var height = graph.height.baseVal.value;
		var ratio = width/height;

		//optimal golden ratio range
		if (1.4 <= ratio && ratio <= 1.8){
			rawScore += 2;
		} else if (1.2 <= ratio && ratio <= 2.2){
			rawScore += 1;
		} else {
			rawScore += 0;
		}


		var title = document.querySelector('.title');
		titleSize = parseInt(getComputedStyle(title).fontSize.slice(0, -2));

		var label = document.querySelector('.axis .tick text');
		labelSize = parseInt(getComputedStyle(label).fontSize.slice(0, -2));

		var titleLabelRatio = titleSize / labelSize;

		if (titleLabelRatio >= 2) {
			rawScore += 1;
		} else if (titleLabelRatio >= 1.5) {
			rawScore += 0.5;
			showButton('increase-title');
		} else {
			rawScore += 0;
			showButton('increase-title');
		}

		if (rawScore >= 3) {
			metrics.scale = 'Excellent';
		} else if (rawScore >= 2) {
			metrics.scale = 'Fair';
		} else {
			metrics.scale = 'Poor';
		}
		
		// TODO: take data shape into account

		updateScaleScoreDescription(ratio, titleLabelRatio);

		// todo: refactor this, take out the awful jquery function updateScaleScoreDescription
		if (1.4 <= ratio && ratio <= 1.8){
			//
		} else if (1.2 <= ratio && ratio <= 2.2){
			var scalingResultDescription = document.querySelector('#scaling-result-description');
			var scalingResultMessage = document.createElement('p');
			scalingResultMessage.innerHTML = 'Although your graph tends toward the horizontal, it is not in the ideal range of 1.4 to 1.8. ';
			scalingResultMessage.innerHTML += 'Consider playing around with the scaling, though different data sets may not necessarily need to adhere to this rule.'
			scalingResultDescription.appendChild(scalingResultMessage);
		} else {
			var scalingResultDescription = document.querySelector('#scaling-result-description');
			var scalingResultMessage = document.createElement('p');
			scalingResultMessage.innerHTML = 'Graphs are more effective when they tend toward the horizontal because they follow natural eye movement.';
			scalingResultMessage.innerHTML += 'Consider playing around with the scaling, though different data sets may not necessarily need to adhere to this rule.'
			scalingResultDescription.appendChild(scalingResultMessage);
		}
	}

	function increaseTitleSize() {
		var title = document.querySelector('.title');
		title.style.fontSize = '2em';
		calculateScaleScore();
		updateMetricDisplay();
		showButton('revert-button');
	}

	// Function updates the description of the metric evaluation in the expanded tile thing
	function updateScaleScoreDescription(ratio, titleLabelRatio) {
		$("#scaling-result-description").html("<p>Calculated scale ratio: <strong>" + 
			(Math.round(ratio * 100 ) / 100) + "</strong></p>" + "<p>Calculated title/label ratio: <strong>" + 
			(Math.round(titleLabelRatio * 100 ) / 100) + "</strong></p>" + 
			"<p>Graph scaling is " + metrics.scale + ".</p>");
	}


	function calculateDataInkBars() {
		var dataBars = document.querySelectorAll('.data');
		var dataTotalArea = 0;

		for (var i = 0; i < dataBars.length; i++) {
			var bar = dataBars[i];
			var width = bar.getAttribute('width');
			var height = bar.getAttribute('height');
			var area = width * height;
			dataTotalArea += area;
		}
		return dataTotalArea;
	}


	function calculateDataInkAxes() {
		var axesTotalArea = 0;
		var axes = document.querySelectorAll('.axis path');
		for (var i = 0; i < axes.length; i++) {
			var axis = axes[i];
			var width = axis.getBBox().width;
			var stroke = parseInt(getComputedStyle(axis).strokeWidth.slice(0, -2));

		  // TODO: figure out a better check for horizontal vs vertical

		  if (width === 0) {
				// y-axis
				var height = axis.getBBox().height;
				axesTotalArea += height * stroke;
			} else {
				// x-axis
				axesTotalArea += width * stroke;
			}
		}
		return axesTotalArea;
	}

	function dist(x1, x2, y1, y2){
		return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
	}

	function removeGridlines() {
		var gridlines = document.querySelectorAll('.axis .tick line');
		for (var i = 0; i < gridlines.length; i++) {
			gridlines[i].style.strokeWidth = 0;
		}
		calculateDataInk();
		updateMetricDisplay();
		showButton('revert-button');
	}

	function thinGridlines() {
		var gridlines = document.querySelectorAll('.axis .tick line');
		for (var i = 0; i < gridlines.length; i++) {
			gridlines[i].style.strokeWidth = 1;
		}
		calculateDataInk();
		updateMetricDisplay();
		showButton('revert-button');
	}

	function calculateDataInkGridlines() {
		var gridlineTotalArea = 0;
		var gridlines = document.querySelectorAll('.axis .tick line');
		for (var i = 0; i < gridlines.length; i++) {
			var gridline = gridlines[i];
			var len = dist(gridline.x1.baseVal.value, gridline.x2.baseVal.value,
               gridline.y1.baseVal.value, gridline.y2.baseVal.value);
			if (len < graph.width.baseVal.value / 2) continue; // not a gridline
			var width = gridline.getBBox().width;
			var stroke = parseInt(getComputedStyle(gridline).strokeWidth.slice(0, -2));
			if (width === 0) {
				// horizontal gridline
				var height = gridline.getBBox().height;
				gridlineTotalArea += height * stroke;
			} else {
				// vertical gridline
				gridlineTotalArea += width * stroke;
			}
		} 
		return gridlineTotalArea;
	}


	function calculateDataInk() {
		var dataTotalArea = calculateDataInkBars();
		var axesTotalArea = calculateDataInkAxes();
		var gridlineTotalArea = calculateDataInkGridlines();
		var nonDataTotalArea = axesTotalArea + gridlineTotalArea;
		var dataInkRatio = dataTotalArea / (dataTotalArea + nonDataTotalArea);

		if (dataInkRatio <= 0.5) {
			metrics.dataInk = "Low";
		} else if (dataInkRatio <= 0.75) {
			metrics.dataInk = "Medium";
		} else {
			metrics.dataInk = "High";
		}

		if (gridlineTotalArea > 0) {
			showButton('remove-gridlines');
			showButton('thin-gridlines');
		}

		updateDataInkResultDescription(dataTotalArea, nonDataTotalArea, dataInkRatio);
	}

	function updateDataInkResultDescription(dataTotalArea, nonDataTotalArea, dataInkRatio) {
		$("#ink-result-description").html("Data Ink: " + dataTotalArea
			+ " pixels<br>Non-Data Ink (gridlines & axes): " + nonDataTotalArea
			+ " pixels<br>Ratio: <strong>" + (Math.round(dataInkRatio * 1000) / 1000) + " (" + metrics.dataInk + ")</strong>");
	}

	function rgbToHex(r, g, b) {
		return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}


	var LightenColor = function(color, percent) {
		var num = parseInt(color,16),
		amt = Math.round(2.55 * percent),
		R = (num >> 16) + amt,
		B = (num >> 8 & 0x00FF) + amt,
		G = (num & 0x0000FF) + amt;

		return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
	}


	function alterColor(col, amt) {
		var usePound = false;
		if (col[0] == "#") {
			col = col.slice(1);
			usePound = true;
		}
		var num = parseInt(col, 16);
		var r = (num >> 16) + amt;
		if (r > 255) {
			r = 255;
		} else if (r < 0) {
			r = 0;
		}
		var b = ((num >> 8) & 0x00FF) + amt;
		if (b > 255) {
			b = 255;
		} else if (b < 0) {
			b = 0;
		}
		var g = (num & 0x0000FF) + amt;
		if (g > 255) {
			g = 255;
		} else if (g < 0) {
			g = 0;
		}
		return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
	}


	function lightenBackground() {
		while (getComputedStyle(graph).backgroundColor != 'rgb(255, 255, 255)' &&
			failingBars.length !== 0) {
			lightenBackgroundOneStep();
		}
		calculateColorBalance();
		updateMetricDisplay();
		showButton('revert-button');
	}


	function allFailingBlack () {
		for (var i = 0; i < failingBars.length; i++) {
			var bar = failingBars[i];
			var fillColor = bar.style.fill;
			if (fillColor !== 'rgb(0, 0, 0)') {
				return false;
			}
		}
		return true;
	}


	function darkenData() {
		while( !allFailingBlack() && failingBars.length !== 0) {
			darkenDataOneStep();
		}
		calculateColorBalance();
		updateMetricDisplay();
		showButton('revert-button');
	}


	function darkenDataOneStep() {
		for (var i = 0; i < failingBars.length; i++) {
			var bar = failingBars[i];
			var fillColor = bar.style.fill;
			var rgb = parseRGB(fillColor);
			var hex = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
			var newColor = LightenColor(hex, -1);
			bar.style.fill = newColor; 
		}
		calculateColorBalance();
	}


	function lightenBackgroundOneStep() {
		//get current background color
		var graphBackgroundColor = getComputedStyle(graph).backgroundColor;

		//transform rbg string into hex code
		var rgb = parseRGB(graphBackgroundColor);
		var hex = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));

		//lighten hex color
		var newColor = alterColor(hex, 20);
		//assign new background color
		graph.style.backgroundColor = newColor;

		//update color balance
		calculateColorBalance();
	}

	function round(value, precision) {
	  var multiplier = Math.pow(10, precision || 0);
	  return Math.round(value * multiplier) / multiplier;
	}

	function calculateColorBalance(){
		var title = document.getElementsByClassName('title')[0];
		var titleColor = getComputedStyle(title).fill;

		var graphBackgroundColor = getComputedStyle(graph).backgroundColor;

		// assumes all gridlines are the same color
		var gridline = document.querySelectorAll('.axis .tick line')[0];
		var len = dist(gridline.x1.baseVal.value, gridline.x2.baseVal.value, gridline.y1.baseVal.value, gridline.y2.baseVal.value);
		var gridlineColor;
		if (len < graph.width.baseVal.value / 2) {
			gridlinePresent = false;
			gridlineColor = graphBackgroundColor;
		} else {
			gridlineColor = getComputedStyle(gridline).stroke;
			gridlinePresent = true;
			if (getComputedStyle(gridline).fill === 'none') {
				gridlinePresent = false;
			}
		}

		titleBackgroundRatio = getColorContrast(titleColor, graphBackgroundColor);
		gridlineBackgroundRatio = getColorContrast(gridlineColor, graphBackgroundColor);

		titleBackgroundRatio = round(titleBackgroundRatio, 2);
		gridlineBackgroundRatio = round(gridlineBackgroundRatio, 2);

		var dataBars = document.querySelectorAll('.data');
		failingBars = [];
    failingGlBars = [];
		var dataBackgroundRatios = {};
		var dataGridlineRatios = {};
		for (var i = 0; i < dataBars.length; i++) {
			var bar = dataBars[i];
			var fillColor = bar.style.fill;
			if (!(fillColor in dataBackgroundRatios)) {
				dataBackgroundRatios[fillColor] = getColorContrast(fillColor, graphBackgroundColor);
				dataGridlineRatios[fillColor] = getColorContrast(fillColor, gridlineColor);
			}
			if (dataBackgroundRatios[fillColor] < 4.5) {
				failingBars.push(bar); 
			}
      if (dataGridlineRatios[fillColor] < 4.5) {
        failingGlBars.push(bar);
      }
		}

    //calculate the number failing
    var numFailing = failingBars.length;
    numFailing += failingGlBars.length;
    if (titleBackgroundRatio < 4.5)
      numFailing++;
    if (gridlineBackgroundRatio < 4.5)
      numFailing++;

    //calculate the total number of comparisons
    var numComparisons = (2*dataBars.length) + 2;
  
    //calculate percent failing
    var percentFailing = (numFailing/numComparisons) * 100;
    var percentPassing = 100 - percentFailing;
    percentPassing = round(percentPassing, 2);

		var colorResultValues = document.getElementById('color-result-values');
		colorResultValues.innerHTML = '';
		var colorResults = document.createElement('div');

    var overallDescription = document.createElement('p');
    if (percentPassing < 100) {
      overallDescription.innerHTML = `<strong>Overall you passed ${percentPassing}% of the color 
      contrast comparisons we made. </strong> For this score, you should be passing every color contrast comparison to ensure the readability of your graph. Scroll down to
      examine the color contrast ratios you can improve. Each color contrast ratio should be at least 4.5. To increase the color contrast ratio, lighten the lighter color
      or darken the darker color of the comparison.`
    } else {
      overallDescription.innerHTML = `<strong>You passed all of the color contrast comparisons! Good job!</strong>`;
    }  
    colorResults.appendChild(overallDescription);
 
		var titleBackgroundResult = document.createElement('p');
		titleBackgroundResult.innerHTML = `<strong>Title-background ratio</strong>: <span id="title-background-ratio-result">${titleBackgroundRatio}</span>`;
		colorResults.appendChild(titleBackgroundResult);

		if (gridlinePresent) {
			var gridlineBackgroundResult = document.createElement('p');
			gridlineBackgroundResult.innerHTML = `<strong>Gridline-background ratio</strong>:${gridlineBackgroundRatio}`;
			colorResults.appendChild(gridlineBackgroundResult);
		}

		var dataBackgroundResult = document.createElement('p');
		dataBackgroundResult.innerHTML = `<strong>Data-background ratio</strong>: <span id="data-background-ratio-result">${failingBars.length}/${dataBars.length} bars do not meet the standard</span>`;
		colorResults.appendChild(dataBackgroundResult);

		if (gridlinePresent) {
			var dataGridlineResult = document.createElement('p');
			dataGridlineResult.innerHTML = `<strong>Data-gridline ratio</strong>: ${failingGlBars.length}/${dataBars.length} bars do not meet the standard`;
			colorResults.appendChild(dataGridlineResult);
		}

		colorResultValues.appendChild(colorResults);

		if (percentPassing > 70) {
			metrics.colorBalance = 'Excellent';
		} else if (percentPassing > 40) {
			metrics.colorBalance = 'Fair';
		} else {
			metrics.colorBalance = 'Poor';
		}

		if (graphBackgroundColor !== 'rgb(255, 255, 255)') showButton('lighten-background');
		showButton('darken-data');
	}


	function dimensionsCheck() { 
		var numCat = document.getElementsByClassName('nominal').length + 
		document.getElementsByClassName('unlabeled').length;
		var numDim = document.getElementsByClassName('nonnominal').length;
		var pass = (numCat === 1 && numDim === 1) ? true : false;
		metrics.dimensions = pass;

		updateDimensionsResultDescription(pass);
	}


	function updateDimensionsResultDescription(pass) {
		if (pass) {
			$("#dimension-result-description").html("Bar graph has one nominal and one ordinal variable. Appropriate chart type for such variables.");
		} else {
			$("#dimension-result-description").html("A bar graph may not be the best way to represent this data - lacking either a categorical or quantitative measure. Try using a different graph.");
		}
	}


	// Takes an rgb string in the format rgb(xx, xx, xx) and returns an array of the color values
	function parseRGB(rgbString) {
		return rgbString.match(/\d+/g);
	}

  // TODO: ask Sukhi for the source of this to cite
	function relativeLuminance(rgb) {
		var argb = rgb.map(function(v) {
			v = (v/255);
			if (v <= 0.03928) {
				return v/12.92;
			} else {
				return Math.pow((v+0.055)/1.055, 2.4);
			}
		});

		return 0.2126 * argb[0] + 0.7152 * argb[1] + 0.0722 * argb[2];
	}


	// color1 and color2 are rgb strings in the format rgb(xx, xx, xx)
	function getColorContrast(colorOneString, colorTwoString){

		var colorOne = parseRGB(colorOneString);
		var colorTwo = parseRGB(colorTwoString);

		//calculate relative luminance
		var lumOne = relativeLuminance(colorOne);
		var lumTwo = relativeLuminance(colorTwo);

		//which color is lighter
		var lightColor = (lumOne < lumTwo) ? lumTwo : lumOne;
		var darkColor = (lightColor === lumOne) ? lumTwo: lumOne;

		//determine the color contrast ratio
		var ratio = (lightColor + 0.05) / (darkColor + 0.05);

		return ratio;
	}

	function showButton(buttonId) {
		document.getElementById(buttonId).style.display = 'inline';
	}

	function revertGraph() {
		var graphContainer = document.getElementById('viz-container');
		graphContainer.innerHTML = originalGraph || '';
		graph = document.getElementsByClassName('graph')[0];
		rateGraph();
		var revertButton = document.querySelector('#revert-button');
		revertButton.style.display = 'none';
	}


	function analyzeFile(file){
		if (!file) return;

		var graphContainer = document.getElementById('viz-container');

		//use FileReader
		var reader = new FileReader();
		reader.onload = function(){
			var text = reader.result;
			originalGraph = text;
			graphContainer.innerHTML = text;
			graph = document.getElementsByClassName('graph')[0];
			rateGraph();
		};
		reader.readAsText(file);
	}

	function updateMetricResultBackground(metricContainer) {
		var resultContainer = document.getElementById(metricContainer);

		// todo: find a way to specify a wildcard e.g. bg-*
		resultContainer.classList.remove('bg-info');
		resultContainer.classList.remove('bg-success');
		resultContainer.classList.remove('bg-warning');
		resultContainer.classList.remove('bg-danger');

		var result = resultContainer.firstElementChild;
		if (result.innerHTML.includes('High') || result.innerHTML.includes('Excellent') || result.innerHTML.includes('Passed')) {
			resultContainer.classList.add('bg-success');
		} else if (result.innerHTML.includes('Fair') || result.innerHTML.includes('Medium')) {
			resultContainer.classList.add('bg-warning');
		} else if (result.innerHTML.includes('Poor') || result.innerHTML.includes('Failed') || result.innerHTML.includes('Low')) {
			resultContainer.classList.add('bg-danger');
		}
	}


	function updateMetricDisplay() {
		$("#scaling-result-display").html(metrics.scale);
		$("#data-ink-result-display").html(metrics.dataInk);
		$("#color-result-display").html(metrics.colorBalance);

		if (metrics.dimensions) {
			$("#dimension-result-display").html("Passed");
		} else {
			$("#dimension-result-display").html("Failed");
		}

		var metricResultContainers = document.querySelectorAll('.metric-ratings');
		Array.prototype.forEach.call(metricResultContainers, function(container) {
			updateMetricResultBackground(container.id);
		});
	}


	function rateGraph() {
		calculateScaleScore();
		calculateDataInk();
		calculateColorBalance();
		dimensionsCheck();
		updateMetricDisplay();
	}


	function initializeEventListeners() {
		//upload image event listener
		var upload = document.getElementById('fileinput');
		upload.addEventListener('change', function(){
			var file = this.files[0];
			analyzeFile(file);
			var metricButtons = document.querySelectorAll('.btn-metric');
			Array.prototype.forEach.call(metricButtons, function(btn) {
				btn.style.display = 'none';
			});
			var revertButton = document.querySelector('#revert-button');
			revertButton.style.display = 'none';
		});

		var revertButton = document.getElementById('revert-button');
		revertButton.addEventListener('click', revertGraph);

		//lighten the background color
		var lightenBgButton = document.getElementById('lighten-background');  
		lightenBgButton.addEventListener('click', lightenBackground);

		//darken failing bars
		var darkenDataButton = document.getElementById('darken-data');
		darkenDataButton.addEventListener('click', darkenData);

		var increaseTitleButton = document.getElementById('increase-title');
		increaseTitleButton.addEventListener('click', increaseTitleSize);

		var removeGridlinesButton = document.getElementById('remove-gridlines');
		removeGridlinesButton.addEventListener('click', removeGridlines);

		var thinGridlinesButton = document.getElementById('thin-gridlines');
		thinGridlinesButton.addEventListener('click', thinGridlines);
	}



	/* MAIN SCRIPT */

  //TODO: SET GRAPH TO NULL THIS IS ONLY FOR DEV

	var graph = document.getElementsByClassName('graph')[0];
	var originalGraph;
	var failingBars = [];
  var failingGlBars = [];
	var metrics = {
		scale: 'Uncalculated',
		dataInk: 'Uncalculated',
		colorBalance: 'Uncalculated',
		dimensions: 'Uncalculated'
	};
	initializeEventListeners();

})();
