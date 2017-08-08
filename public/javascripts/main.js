$(document)
  .ready(function() {
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      });
    // create sidebar and attach to menu open
    $('.ui.sidebar').sidebar('attach events', '.toc.item');
    $('.ui.accordion').accordion();
    $('.ui.menu .ui.dropdown').dropdown({on: 'hover'});
    $('.ui.menu a.item').on('click', function(){
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active');
      });
    $('.trigger.example .accordion').accordion({
      selector: {
        trigger: '.title .icon'}
      });
  });
