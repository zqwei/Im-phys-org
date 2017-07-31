(function () {
    function setTOC(curr_toc){
        var toc = '<h3 class="ui header">TOC</h3>';
        toc += "<div class='ui large bulleted list'>";
        var ind = false;
        var toc_name = '#' + curr_toc + ' h1';
        var sticky_name = '#' + curr_toc + '_sticky';
        $(toc_name).each(function(){
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
        $(sticky_name).html(toc);
    };

    $.each($('.ui.tab .ui.grid .ui.text'), function(index, item){
        curr_toc = $(this).attr('id');
        setTOC(curr_toc);
    });

})();
