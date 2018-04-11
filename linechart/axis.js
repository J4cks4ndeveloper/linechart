


 var vis = d3.select("#visualisation"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    },


xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1940,2020]),

yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,600]),


xAxis = d3.svg.axis()
    .scale(xScale),
  
yAxis = d3.svg.axis()
    .scale(yScale);



vis.append("svg:g")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);


    yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

    vis.append("svg:g")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);


    var lineGen = d3.svg.line()
  .x(function(d) {
    return xScale(d.year);
  })
  .y(function(d) {
    return yScale(d.disasters);
  });

  vis.append('svg:path')
  .attr('d', lineGen(data))
  .attr('stroke', 'red')
  .attr('stroke-width', 2)
  .attr('fill', 'none');