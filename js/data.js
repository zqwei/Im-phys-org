// jquery methods for $(document).ready

$(function(){
    var strTemp = $('#code_content').text();
    strTemp = strTemp.replace(/\s/g, '');
    if(!strTemp){
        $('#data_content').load('context/_data_collection.html');
    };


    $('#code_menu a').on('click', function(){
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
        var str = $(this).text();
        str = str.replace(/\s+/g, '_').toLowerCase();
        $('#data_content').load('context/_data_' + str + '.html')
    });
}()
);
