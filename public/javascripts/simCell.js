function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

function plot_cell(){
  var dataset = $('#simDatasetID').dropdown('get value');
  var cell = $('#simCell').dropdown('get value');
  var url = '/results/simData/' + dataset + '/' + cell ;
  var data = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  var layout = {
    autosize: false,
    width: 1000,
    height: 500,
    margin: {
      l: 30,
      r: 0,
      b: 30,
      t: 0
    },
    xaxis:{
      title: 'Time (sec)'
    },
    yaxis:{
      title: 'dF/F'
    }
  };
  Plotly.plot("simChart", data, layout, {showLink: false}).then(function(){
    window.requestAnimationFrame(function(){
      window.requestAnimationFrame(function(){
        window.alert('Your plot is done');
      });
    });
  });
  // Plotly.d3.csv(url + '_spk.csv', function(data){
  //   // console.log(unpack(data, 'spkTime'));
  //   // console.log(unpack(data, 'spk'));
  // });
}

$(function(){
  $('#simDatasetID').dropdown({
    onChange: function(value){
      // console.log(value);
      var html = '';
      $.getJSON('/results/sim_'+ value +'.json', function(resultsJson){
        $.each(resultsJson, function(ind, val){
          html += '<div class="item" data-value="' + val.name + '">' + val.name + '</div>';
        });
        $('#simDataID').html(html);
        $('#simCell').dropdown('clear');
      });
    }
  });
});
