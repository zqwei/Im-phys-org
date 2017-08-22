function plot_cell(){
  var dataset = $('#simDatasetID').dropdown('get value');
  var cell = $('#simCell').dropdown('get value');
  if (cell === ''){
    alert("Please select a cell!");
  }
  else{
    var url = '/results/simData/' + dataset + '/' + cell + '.html' ;
    $('#simChart').html('<iframe src="' + url + '" width="1200" height="430" frameborder="0"></iframe>');
  }
};


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
