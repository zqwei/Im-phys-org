(function() {

    function getContentFromJson(json_name, callback){
        $.getJSON( json_name, function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
                items.push( key + ">" + val + "<br>" );
                });
            callback(items);
            });
        }

    if('#code_collection'){
        getContentFromJson('dat/code_collection.json', function(data) {
            $('#code_collection').html(data);
        });
    }

    if('#code_development'){
        getContentFromJson('dat/code_development.json', function(data) {
            $('#code_development').html(data);
        });
    }

})();
