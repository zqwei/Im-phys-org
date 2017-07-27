(function() {

    function getContentFromJson(json_name, callback){
        $.getJSON( json_name, function( data ) {
            var items = '<div class="ui basic accordion">';
            $.each( data, function() {
                var item_data = $(this)[0];
                var item = "<div class='title'><h3><i class='folder outline icon'></i>";
                item += item_data['Name'] + "&nbsp".repeat(20-item_data['Name'].length);
                if(item_data['Label'].indexOf('Non') === -1){
                    item += '<span class="ui red label flotated right">Simultaneous ephys-imaging</span>';
                }else{
                    if(item_data['Label'].indexOf('ephys') !== -1 ){
                        item += '<span class="ui blue label">Nonsimultaneous ephys</span>';
                    }
                    else if (item_data['Label'].indexOf('calcium') !== -1) {
                        item += '<span class="ui green label">Nonsimultaneous calcium imaging</span>';
                    }
                }
                item += '</h3></div><div class="content">';
                item_data['OtherLabel'].forEach(function(element){
                    item += '<span class="ui black label">' + element + '</span>';
                });

                item += '<div class="ui bulleted list"> <div class="item"> <b> Dataset description: </b>' + item_data['Description'] + '</div>'
                item += '<div class="item"> <b> Reference: </b> <div class="ui bulleted list">'
                item_data['Reference'].forEach(function(element){
                    item += '<div class="item">' + element + '</div>';
                });
                item += '</div> </div>'
                item += '<div class="item">  <b> Link: </b>' + item_data['Link'] + '</div></div>'
                item += '</div>';
                items += item;
                });
            items += '</div>';
            console.log(items)
            callback(items);
            });
        }

    if($('#data_collection')){
        getContentFromJson('dat/data_collection.json', function(data) {
            $('#data_collection').html(data);
        });
    }

    if($('#data_development')){
        getContentFromJson('dat/data_development.json', function(data) {
            $('#data_development').html(data);
        });
    }

})();
