var comparisonDistr = $('#nonFormDistrList').serializeArray(),
    comparisonnDistrList = [];
$(comparisonDistr).each(function(i, field){
  comparisonnDistrList.push(field.value);
});

console.log(comparisonnDistrList);

var numPerformance = 4;
var html = '';
var objectArrary = $('#nonFormList').serializeArray();
var modelList = [];
var dataList = [];
var dataModelList = [];
var ephysList = [];
var fails = 0;

$.each(objectArrary, function(ind, value){
  var name = this.name.split("/");
  var type_name = name[0];
  if(type_name === 'data'){
    if(name[1].indexOf('ephys')>=0){
      ephysList.push([name[1], name[2]])
    }
    else{
      dataList.push(['imaging '+name[1], name[2]]);
    }
  }
  else if (type_name === 'model') {
    modelList.push(name[1]);
  }
});
if(dataList.length+ephysList.length){
  if(dataList.length){
    $.each(modelList, function(ind, model){
      $.each(dataList, function(ind, data){
        dataModelList.push([data[0]+'/'+model, data[1]+'_'+model]);
      });
    });
  }
  dataList = ephysList.concat(dataList);
  dataList.sort();
  dataList = dataList.concat(dataModelList);
  $.each(dataList, function(ind, data){
    var str_data = data[0].split("/");
    var tb_name = '<h4>'+str_data[0]+'</h4>';
    if (str_data.length===1){
      tb_name += '<br><br>';
    }else {
      tb_name += str_data[1]+'<br><br>';
    }
    html += '<tr>';
    html += '<td>'+ tb_name +'</td>'
    // html += '<td>' + cellNum + '</td>'
    for(var i=0; i<numPerformance; i++){
      var url =  '/results/nonDataDistr/' + data[1] + '_' + comparisonnDistrList[i] + '.svg';
      html += '<td><img src="' + url +'"></td>'
    }
    html += '</tr>';
  });
  $('#nonFormDistrListResults').html(html);
}
else{
  $('#nonFormDistrListResults').load('/results/_non_ephys_ca_s2c_form_empty.html');
}
