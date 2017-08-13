$(function(){
  var url = '/results/nonData/ALM_short_delay_datasets_6s-AAV_selecctivity.csv';
  var divId = 'ALMshortdelaydatasets6s-AAV0';
  var chart = c3.generate({
    data: {
      url: url,
      type: 'donut'
    }
  });
  console.log($('#' + divId));
  $('#' + divId).html(chart.element);
})



// $(function(){
//   var dataList = this.nonFormDataList;
//
//   $.each(dataList, function(ind, data){
//     // plot selecctivity
//     var plot_ind = 0;
//     var url = data.replace(/\ +/g, '_');
//     url = url.replace(/\//g, '_');
//     url = url.replace(/\./g, '');
//     url =  '/results/nonData/' + url + '_' + comparisonList[plot_ind] + '.csv';
//     var divId = data.replace(/\ +/g, '');
//     divId = divId.replace(/\//g, '');
//     divId = divId.replace(/\./g, '');
//     divId += plot_ind;
//     $.ajax({
//       url: url,
//       success: function(){
//         var chart = c3.generate({
//           data: {
//             url: url,
//             type: 'donut'
//           }
//         });
//         setTimeout(function () { chart.load({columns: data}); }, 500);
//         $("#" + divId).html(chart.element);
//       },
//       error: function(){
//         $("#" + divId).html('Results will be compiled soon .... <br> Please check back our website.');
//       }
//     });
//   });
//
//   $.each(dataList, function(ind, data){
//     // plot peakness
//     var plot_ind = 1;
//     var url = data.replace(/\ +/g, '_');
//     url = url.replace(/\//g, '');
//     url = url.replace(/\./g, '');
//     url =  '/results/nonData/' + url + comparisonList[plot_ind] + '.csv';
//     var divId = data.replace(/\ +/g, '');
//     divId = divId.replace(/\//g, '');
//     divId = divId.replace(/\./g, '');
//     divId += plot_ind;
//     $.ajax({
//       url: url,
//       success: function(){
//         c3.generate({
//           bindto: "#" + divId,
//           data: {
//             url: url,
//             type: 'pie'
//           }
//         });
//       },
//       error: function(){
//         $("#" + divId).html('Results will be compiled soon .... <br> Please check back our website.');
//       }
//     });
//   });
//
//
//   $.each(dataList, function(ind, data){
//     // plot pc
//     var plot_ind = 2;
//     var url = data.replace(/\ +/g, '_');
//     url = url.replace(/\//g, '');
//     url = url.replace(/\./g, '');
//     url =  '/results/nonData/' + url + comparisonList[plot_ind] + '.csv';
//     var divId = data.replace(/\ +/g, '');
//     divId = divId.replace(/\//g, '');
//     divId = divId.replace(/\./g, '');
//     divId += plot_ind;
//     $.ajax({
//       url: url,
//       success: function(){
//         c3.generate({
//           bindto: "#" + divId,
//           data: {
//             url: url,
//             type: 'pie'
//           }
//         });
//       },
//       error: function(){
//         $("#" + divId).html('Results will be compiled soon .... <br> Please check back our website.');
//       }
//     });
//   });
//
//   $.each(dataList, function(ind, data){
//     // plot decodability
//     var plot_ind = 3;
//     var url = data.replace(/\ +/g, '_');
//     url = url.replace(/\//g, '');
//     url = url.replace(/\./g, '');
//     url =  '/results/nonData/' + url + comparisonList[plot_ind] + '.csv';
//     var divId = data.replace(/\ +/g, '');
//     divId = divId.replace(/\//g, '');
//     divId = divId.replace(/\./g, '');
//     divId += plot_ind;
//     $.ajax({
//       url: url,
//       success: function(){
//         c3.generate({
//           bindto: "#" + divId,
//           data: {
//             url: url,
//             type: 'pie'
//           }
//         });
//       },
//       error: function(){
//         // console.log(plot_ind);
//         // console.log(divId);
//         $("#" + divId).html('Results will be compiled soon .... <br> Please check back our website.');
//       }
//     });
//   });
// })
