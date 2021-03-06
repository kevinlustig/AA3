var AA3 = _.extend({}, {CardCharts: {}}, AA3)

_.extend(AA3.CardCharts, {
  p_of_children_in_programs_: function () { 
    // Static vars 
    
    function factory() {

      function chart(holder) {
        // Bad globals!! - <3 Reed
        var meta = metaMap.get('p_of_children_in_programs_2014')[0];

        holder.call(AA3.d3.ThreeBarChartQuestion()
                      .metaData(meta)
                      .yearRange([2014, 2009, 2004]).enableMoreInfo(false)
                      .projection('real_of_children_in_programs_2014'));
      }
  
      // Chart attributes
      return chart;
    }
    
    return factory; 
  }()

});

