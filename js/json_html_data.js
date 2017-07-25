(function() {

    function getContentFromJson(json_name, callback){
        $.getJSON( json_name, function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
                console.log(key);
                items.push( key + ">" + val + "<br>" );
                });
            callback(items);
            });
        }

    if('#data_collection'){
        getContentFromJson('dat/data_collection.json', function(data) {
            $('#data_collection').html(data);
        });
    }

    if('#data_development'){
        getContentFromJson('dat/data_development.json', function(data) {
            $('#data_development').html(data);
        });
    }

})();
