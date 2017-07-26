(function () {
    var toc = [];
    toc += "<div class='ui bulleted list'>";
    var ind = false;
    $("h1").each(function(){
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
    toc += "</div>";
    $(".ui.sticky").html(toc);
    $(".ui.sticky").sticky({offset:50, bottomOffset:50, context:"#toc_text"});
    $(".ui.sticky").sticky('refresh');
})();
