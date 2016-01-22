			var appreciationValues;
			var attentionValues;
			var appreciationValuesAverage;
			var attentionValuesAverage;
			var appreciationGroupValues;
			var attentionGroupValues;
			var appreciationGroupValuesAverage;
			var attentionGroupValuesAverage;
			 //csv dataset as objects	

			function getData() {
				$("#div1").removeClass("hide");
				window.location.href = "#contact";

				d3.text("attention.csv", function(text) {
    				attentionValues = d3.csv.parseRows(text)
        			getGraphData();
        			var sum = 0;
        			for (var i=0; i < attentionValues.length; i++) {
        				sum += parseFloat(attentionValues[i][2]);
        			}
        			attentionValuesAverage = Math.round(sum/attentionValues.length)
        			d3.text("appreciation.csv", function(text) {
	    				appreciationValues = d3.csv.parseRows(text)
	    				getGraph2Data();
	    				var sum = 0;
	        			for (var i=0; i < appreciationValues.length; i++) {
	        				sum += parseFloat(appreciationValues[i][2]);
	        			}
	        			appreciationValuesAverage = sum/appreciationValues.length;
	        			d3.text("attention2.csv", function(text) {
		    				attention2Values = d3.csv.parseRows(text)
		        			getGraph5Data();
		        			var sum = 0;
		        			for (var i=0; i < attention2Values.length; i++) {
		        				sum += parseFloat(attention2Values[i][2]);
		        			}
		        			attention2ValuesAverage = Math.round(sum/attention2Values.length)
		        			d3.text("appreciation2.csv", function(text) {
			    				appreciation2Values = d3.csv.parseRows(text)
			    				getGraph6Data();
			    				var sum = 0;
			        			for (var i=0; i < appreciation2Values.length; i++) {
			        				sum += parseFloat(appreciation2Values[i][2]);
			        			}
			        			appreciationValuesAverage = sum/appreciation2Values.length;
	        					updateGauges();
	        				}
	        		})
    				// setInterval(updateGauges, 850);        			
				})

				d3.text("attention-avg.csv", function(text) {
    				attentionGroupValues = d3.csv.parseRows(text)
        			getGraph3Data();
        			var sum = 0;
        			for (var i=0; i < attentionGroupValues.length; i++) {
        				sum += parseFloat(attentionGroupValues[i][2]);
        			}
        			attentionGroupValuesAverage = Math.round(sum/attentionGroupValues.length)
        			d3.text("appreciation-avg.csv", function(text) {
	    				appreciationGroupValues = d3.csv.parseRows(text)
	    				getGraph4Data();
	    				var sum = 0;
	        			for (var i=0; i < appreciationGroupValues.length; i++) {
	        				sum += parseFloat(appreciationGroupValues[i][2]);
	        			}
	        			appreciationGroupValuesAverage = sum/appreciationGroupValues.length;
	        			updateGauges();
        			})
    				// setInterval(updateGauges, 850);        			
				})

				d3.text("attention2.csv", function(text) {
    				attentionValues = d3.csv.parseRows(text)
        			getGraphData();
        			getGraph5Data();
        			getGraph7Data();
        			var sum = 0;
        			for (var i=0; i < attentionValues.length; i++) {
        				sum += parseFloat(attentionValues[i][2]);
        			}
        			attentionValuesAverage = Math.round(sum/attentionValues.length)
        			d3.text("appreciation2.csv", function(text) {
	    				appreciationValues = d3.csv.parseRows(text)
	    				getGraph2Data();
	    				getGraph6Data();
	    				getGraph8Data();
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