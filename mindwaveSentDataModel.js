			var appreciationValues;
			var attentionValues;
			var familiarityValues;
			var meditiationValues;
			var mentalEffortValues;
			var appreciationValuesAverage;
			var attentionValuesAverage;
			var familiarityValuesAverage;
			var meditiationValuesAverage;
			var mentalEffortValuesAverage;
			 //csv dataset as objects	

			function getData() {

				d3.text("attention.csv", function(text) {
    				attentionValues = d3.csv.parseRows(text)
        			getGraphData();
        			getGraph3Data();
        			var sum = 0;
        			for (var i=0; i < attentionValues.length; i++) {
        				sum += parseFloat(attentionValues[i][2]);
        			}
        			attentionValuesAverage = Math.round(sum/attentionValues.length)
        			d3.text("appreciation.csv", function(text) {
	    				appreciationValues = d3.csv.parseRows(text)
	    				getGraph2Data();
	    				getGraph4Data();
	    				var sum = 0;
	        			for (var i=0; i < appreciationValues.length; i++) {
	        				sum += parseFloat(appreciationValues[i][2]);
	        			}
	        			appreciationValuesAverage = sum/appreciationValues.length;
	        			updateGauges();
        			})
    				// setInterval(updateGauges, 850);        			
				})
        			
        

				d3.text("familiarity.csv", function(text) {
    				familiarityValues = d3.csv.parseRows(text)
    				console.log(familiarityValues)
					// setInterval(updateGauges, 850);        			
    // Now do something with data
				})
				d3.text("meditation.csv", function(text) {
    				meditiationValues = d3.csv.parseRows(text)
    				console.log(meditiationValues)
					// setInterval(updateGauges, 850);        			
    // Now do something with data
				})
				d3.text("mentalEffort.csv", function(text) {
    				mentalEffortValues = d3.csv.parseRows(text)
    				console.log(mentalEffortValues)
					// setInterval(updateGauges, 850);        			
    // Now do something with data
				})
			}