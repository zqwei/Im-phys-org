
$('#code_menu a.item').on('click', function(){
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
});
