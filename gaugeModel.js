var gauges = [];
			
			function createGauge(name, label, min, max, minorTicks)
			{
				var config = 
				{
					size: 120,
					label: label,
					min: undefined != min ? min : 0,
					max: undefined != max ? max : 100,
					minorTicks: undefined != minorTicks ? minorTicks : 5,
				}
				
				var range = config.max - config.min;
				config.yellowZones = [{ from: config.min + range*0.33, to: config.min + range*0.66 }];
				config.redZones = [{ from: config.min + range*0.66, to: config.max }];
				
				gauges[name] = new Gauge(name + "GaugeContainer", config);
				gauges[name].render();
			}
			
			function createGauges()
			{
				createGauge("attention", "Attention");
				// createGauge("meditation", "Meditation");
				// createGauge("familiarity", "Familiarity",0,5,1);
				//createGauge("test", "Test", -50, 50 );
			}
			
			var i = 0;

			function updateGauges()
			{
				var value = attentionValues[i%attentionValues.length].Value;
				gauges["attention"].redraw(value);
				i += 1;
			}
			
			function getRandomValue(gauge)
			{
				
				var overflow = 0; //10;
				return gauge.config.min - overflow + (gauge.config.max - gauge.config.min + overflow*2) *  Math.random();
			}

			var attentionValues; //csv dataset as objects
			
			function initialize()
			{
				
				d3.csv("TestData.csv", function(data) {
					attentionValues = data;
					createGraph(attentionValues);
				});
				createGauges();		
				setInterval(updateGauges, 1000);
			}

			

			