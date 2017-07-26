(function() {

    function getContentFromJson(json_name, callback){
        $.getJSON( json_name, function( data ) {
            var items = '<div class="ui basic accordion">';
            $.each( data, function() {
                var item_data = $(this)[0];
                var item = "<div class='title'><h3><i class='dropdown icon'></i>";
                item += item_data['Name'] + '</h3></div><div class="content">';
                item += '<p> <b> Dataset description: </b>' + item_data['Description'] + '</p>'
                item += '<p> <b> Reference: </b>' + item_data['Reference'] + '</p>'
                item += '<p> <b> Link: </b>' + item_data['Link'] + '</p>'
                item += '</div>';
                items += item;
                });
            items += '</div>';
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
