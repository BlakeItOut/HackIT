			var appreciationValues;
			var attentionValues;
			var appreciationValuesAverage;
			var attentionValuesAverage;
			var appreciationGroupValues;
			var attentionGroupValues;
			var appreciationGroupValuesAverage;
			var attentionGroupValuesAverage;
			var appreciation2Values;
			var attention2Values;
			var appreciation2ValuesAverage;
			var attention2ValuesAverage;
			 //csv dataset as objects	

			function getData() {
				$("#div1").removeClass("hide");
				window.location.href = "#contact";

				d3.text("attention.csv", function(text) {
    				attentionValues = d3.csv.parseRows(text)
        			getGraphData();
        			var sum = 0;
        			for (var i=0; i < 30; i++) {
        				sum += parseFloat(attentionValues[(attentionValues.length-31)+i][2]);
        			}
        			attentionValuesAverage = Math.round(sum/30)
        			d3.text("appreciation.csv", function(text) {
	    				appreciationValues = d3.csv.parseRows(text)
	    				getGraph2Data();
	    				var sum = 0;
	        			for (var i=0; i < 30; i++) {
	        				sum += parseFloat(appreciationValues[(appreciationValues.length-31)+i][2]);
	        			}
	        			appreciationValuesAverage = sum/30;
	        			d3.text("attention2.csv", function(text) {
		    				attention2Values = d3.csv.parseRows(text)
		        			getGraph5Data();
		        			var sum = 0;
		        			for (var i=0; i < 30; i++) {
		        				sum += parseFloat(attention2Values[(attention2Values.length-31)+i][2]);
		        			}
		        			attention2ValuesAverage = Math.round(sum/30)
		        			d3.text("appreciation2.csv", function(text) {
			    				appreciation2Values = d3.csv.parseRows(text)
			    				getGraph6Data();
			    				var sum = 0;
			        			for (var i=0; i < 30; i++) {
			        				sum += parseFloat(appreciation2Values[(appreciation2Values.length-31)+i][2]);
			        			}
			        			appreciation2ValuesAverage = sum/30;
	        					updateGauges();
	        				})
	        			})

	        		// setInterval(updateGauges, 850); 
	        		})
				})
    				     

				d3.text("attention-avg.csv", function(text) {
    				attentionGroupValues = d3.csv.parseRows(text)
        			getGraph3Data();
        			var sum = 0;
        			for (var i=0; i < 30; i++) {
        				sum += parseFloat(attentionGroupValues[(attentionGroupValues.length-31)+i][2]);
        			}
        			attentionGroupValuesAverage = Math.round(sum/30)
        			d3.text("appreciation-avg.csv", function(text) {
	    				appreciationGroupValues = d3.csv.parseRows(text)
	    				getGraph4Data();
	    				var sum = 0;
	        			for (var i=0; i < 30; i++) {
	        				sum += parseFloat(appreciationGroupValues[(appreciationGroupValues.length-31)+i][2]);
	        			}
	        			appreciationGroupValuesAverage = sum/30;
	        			updateGauges();
        			})
    				// setInterval(updateGauges, 850);        			
				})
        

				d3.text("familiarity.csv", function(text) {
    				familiarityValues = d3.csv.parseRows(text)
    				
					// setInterval(updateGauges, 850);        			
    // Now do something with data
				})
				d3.text("meditation.csv", function(text) {
    				meditiationValues = d3.csv.parseRows(text)
    				
					// setInterval(updateGauges, 850);        			
    // Now do something with data
				})
				d3.text("mentalEffort.csv", function(text) {
    				mentalEffortValues = d3.csv.parseRows(text)
    				
					// setInterval(updateGauges, 850);        			
    // Now do something with data
				})
			}