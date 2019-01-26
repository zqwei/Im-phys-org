function plot_cell(){
  //this.attr('disabled', 'disabled');
  var button = $('#button');
  button.attr('disabled', 'disabled');

  var dataset = $('#simDatasetID').dropdown('get value');
  var cell = $('#simCell').dropdown('get value');

  if (cell === ''){
    alert_message = $('<h5 align="center" style="color:red">Please select a cell!"</h5>');
    $('#alert').append(alert_message);
  }
  else{
    $('#alert').empty();
    var progressBar = $('<div class="progress"><div class="progress-bar progress-bar-striped" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id ="load"></div></div>');

    $('#simChart').replaceWith('<div id="simChart"><div class="bk-root"><div class="bk-plotdiv" id="mainPlot"></div></div></div>')
    var url = '/results/simdata/' + dataset + '/' + cell + '.json' ;
    $('#mainPlot').append(progressBar);
    var timerId, percent;

  // reset progress bar
    percent = 0;
    $('#load').css('width', '0px');
    $('#load').addClass('progress-bar-striped active');


    timerId = setInterval(function() {

    // increment progress bar
      percent += 5;
      $('#load').css('width', percent + '%');


      // complete
      if (percent >= 100) {
        clearInterval(timerId);


      // do more ...

        }

      }, 1000);

    $.getJSON(url, function(data){
        Bokeh.safely(function() {
          var docs_json = data[0];
          var render_items = data[1];
          Bokeh.embed.embed_items(docs_json, render_items);
          button.removeAttr('disabled', 'disabled');
          percent = 100
        });

      });
  };
};


$(function(){
  $('#simDatasetID').dropdown({
    onChange: function(value){
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
