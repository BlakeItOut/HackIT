function createGraph() {
				var vis = d3.select('#visualisation'),
				    WIDTH = 1000,
				    HEIGHT = 500,
				    MARGINS = {
				      top: 20,
				      right: 20,
				      bottom: 20,
				      left: 50
				    },
				    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(attentionValues, function(d) {
				      return d.Time;
				    }), d3.max(attentionValues, function(d) {
				      return d.Time;
				    })]),
				    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(attentionValues, function(d) {
				      return d.Value;
				    }), d3.max(attentionValues, function(d) {
				      return d.Value;
				    })]),
				    xAxis = d3.svg.axis()
				      .scale(xRange)
				      .tickSize(5)
				      .tickSubdivide(true),
				    yAxis = d3.svg.axis()
				      .scale(yRange)
				      .tickSize(5)
				      .orient('left')
				      .tickSubdivide(true);

				vis.append('svg:g')
				  .attr('class', 'x axis')
				  .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
				  .call(xAxis);

				vis.append('svg:g')
				  .attr('class', 'y axis')
				  .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
				  .call(yAxis);

				var lineFunc = d3.svg.line()
				  .x(function(d) {
				    return xRange(d.Time);
				  })
				  .y(function(d) {
				    return yRange(d.Value);
				  })
				  .interpolate('basis');

				vis.append('svg:path')
				  .attr('d', lineFunc(attentionValues))
				  .attr('stroke', 'blue')
				  .attr('stroke-width', 2)
				  .attr('fill', 'none');

				var curtain = vis.append('rect')
			    .attr('x', -1 * 1000)
			    .attr('y', -1 * 500)
			    .attr('height', 500)
			    .attr('width', 1000)
			    .attr('class', 'curtain')
			    .attr('transform', 'rotate(180)')
			    .style('fill', '#ffffff')

				var t = vis.transition()
    				.delay(750)
	    			.duration(6000)
	    			.ease('linear')
	    			.each('end', function() {
	      				d3.select('line.guide')
	        				.transition()
	        				.style('opacity', 0)
	        				.remove()
	    			});

	    		t.select('rect.curtain')
	    			.attr('width', 0);
			}