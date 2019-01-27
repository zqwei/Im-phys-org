var comparisonList = ['selectivity', 'peakness', 'pca', 'decodability'];
var numPerformance = 4;
var html = '';
var objectArrary = $('#nonFormList').serializeArray();
var modelList = [];
var dataList = [];
var dataModelList = [];
var ephysList = [];

$.getJSON("/results/nonDataResults.json", function(resultsJson){
  $.each(objectArrary, function(ind, value){
    var name = this.name.split("/");
    var type_name = name[0];
    if(type_name === 'data'){
      if(name[2].indexOf('ephys')>=0){
        ephysList.push(name[1]+'/'+name[2])
      }
      else{
        dataList.push(name[1]+'/imaging '+name[2]);
      }
    }
    else if (type_name === 'model') {
      modelList.push(name[1]);
    }
  });
  if(dataList.length){
    $.each(modelList, function(ind, model){
      $.each(dataList, function(ind, data){
        dataModelList.push(data+'/'+model);
      });
    });
    dataList = ephysList.concat(dataList);
    dataList = dataList.concat(dataModelList);
    // dataList.sort();
    $.each(dataList, function(ind, data){
      var str_data = data.split("/");
      var tb_name = '<h4>'+str_data[0]+'</h4>';
      if (str_data.length===1){
        tb_name += '<br><br>';
      }else if (str_data.length===2) {
        tb_name += str_data[1]+'<br><br>';
      }else {
        tb_name += str_data[1]+'<br><font color="blue">'+str_data[2]+'</font><br>';
      }
      html += '<tr>';
      html += '<td>'+ tb_name +'</td>'
      var indDataset = resultsJson.findIndex(function(element){
        return element.name === str_data[0];
      });
      var indData = resultsJson[indDataset].matched.findIndex(function(element){
        if(str_data[1].indexOf('imaging ')>=0){
          return element.name === str_data[1].substring(8);
        }
        else {
          return element.name === str_data[1];
          }
      });
      var urlName = resultsJson[indDataset].matched[indData].picname;
      var cellNum = resultsJson[indDataset].matched[indData].numcell;
      if (str_data.length===3){
        urlName += '_' + str_data[2];
        console.log(str_data[2])
        cellNum = ''
        if (str_data[2].indexOf('S2C')>=0){cellNum = resultsJson[indDataset].matched[0].numcell;}
        console.log(cellNum)
        if (str_data[2].indexOf('C2S')>=0){cellNum = resultsJson[indDataset].matched[indData].numcell;}
        console.log(cellNum)
      }
      html += '<td>' + cellNum + '</td>'
      for(var i=0; i<numPerformance; i++){
        var url =  '/results/nonData/' + urlName + '_' + comparisonList[i] + '.svg';
        html += '<td><img src="' + url +'"></td>'
      }
      html += '</tr>';
    });
    $('#nonFormListResults').html(html);
  }
  else{
    alert('Please select dataset to compare....');
    $('#nonFormListResults').load('/results/_non_ephys_ca_s2c_form_empty.html');
  }

});
