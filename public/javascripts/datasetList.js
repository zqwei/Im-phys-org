$.get( '/data/senddata/', function(data, status){
  if (status === 'success'){
    var collection = data;
    var html = '';
    var objectArrary = $('#data_collection_tab').serializeArray();
    var collectArray = $('#data_collection_tab .menu a.active.item');
    var collect_ = 0;
    var behavior_ = 0;
    $.each(collectArray, function(ind, value){
        var ind_ = collectArray[ind].name.search('c-');
        if(ind_ >= 0){
          collect_ = collectArray[ind].name.substr(2);
        }
    });

    $.each(collectArray, function(ind, value){
        var ind_ = this.name.search('b-'+collect_);
        if(ind_ >= 0){
          behavior_ = this.name.substr(2+collect_.length+1);
        }
    });

    collect_ = parseInt(collect_);
    behavior_ = parseInt(behavior_);    
    var data_info = collection[collect_]['behavior'][behavior_];
    var title = collection[collect_]["brain_area"] + '  --  ' + data_info["name"]; 
    html = '<h3>'+title+'</h3>'+'<span class="ui blue label">'+data_info['label']+'</span>';
    var content = '<div class="ui accordion">'+data_info['description']+'<div class="title"><i class="dropdown icon"></i> Read more </div> <div class="content">'+data_info['description_detail']+'<br><br><img src="'+data_info['description_images']+'" height="150" class="ui centered image"><br><br></div></div></div>';
    
    var list_item = '';
    $.each(objectArrary, function(ind, value){
      var name = this.name;
      if(name.indexOf('ephys')===0){
        list_item+=subdataHtml(data_info['ephys'], name);
        }
      else{
        list_item+=subdataHtml(data_info['imaging'], name);
      }
    });
    var list_ = '<ul class="ui list">'+list_item+'</ul><br><br><br><br>';
    $('#data_collection').html(html+content+list_);
    $('#data_collection .ui.accordion').accordion();
  }
});


function subdataHtml(info, name){
  var html_ = '';
  $.each(info, function(ind, value){
    if (this.name===name){
      html_ = '<li><h4>'+name+'</h4></li>';
      html_ += '<div class="ui accordion"><div class="title">  Description <i class="dropdown icon"></i> </div> <div class="content">'+this['Description']+'<br></div></div>';
      html_ += '<span class="ui small gray label">Reference</span>' +this['Reference'][0] + '<br>';
      html_ += '<span class="ui small gray label">Link</span><a href="'+this['Linkhref']+'">'+this['Link']+'</a><br>';
    }
  });
  return html_;
}

//     {{#each OtherLabel}}
//       <span class="ui gray label">{{this}}</span>
//     {{/each}}
//     <br> {{Description}}
//     <br> <br> <div class="ui gray label">
//       References
//     </div>
//     <ul class="ui list">
//       {{#each Reference}}
//         <li>{{this}}</li>
//       {{/each}}
//     </ul>
//     <span class="ui gray label">Link</span> <a href="{{Linkhref}}">{{Link}}</a>
//     <br>
//     <br>