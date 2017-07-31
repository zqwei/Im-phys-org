(function () {
    var toc = '<h3 class="ui header">TOC</h3>';
    toc += "<div class='ui large bulleted list'>";
    var ind = false;
    var active_toc = $('.ui.active.tab .ui.grid .ui.text').attr('id');
    active_toc = '#' + active_toc + ' h1';
    console.log(active_toc);
    $(active_toc).each(function(){
        current = $(this);
        if(ind){
            var html = current.html();
            var html_new = html.substring(html.indexOf('_'), html.indexOf('>')-1);
            html = current.text();
            html_new = "<a href='#" + html_new + "'>" + html + "</a>";
        }
        else{
            var html = current.text();
            var html_new = "<a href='#_top'>" + html + "</a>";
            ind = true;
        }
        toc += "<a class='item'>" + html_new + "</a>";
    });
    toc += "</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
    $(".ui.sticky").html(toc);
})();
