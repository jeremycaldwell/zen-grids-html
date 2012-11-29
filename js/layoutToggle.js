// Layout active
$(document).ready(function () {
  $('#settings a.toggle').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active');
    return false;
  })
});

var OBC = (function (OBC, $) {

    'use strict';

    OBC.layoutToggle = {
        init: function (triggers) {
            $(triggers).click(function (e) {
                e.preventDefault();
                OBC.layoutToggle.toggle(this);
            });
            return triggers;
        },
        toggle: function (el) {
            var dir = $(el).attr('href');
            if (dir === '#first') {
                $('body').removeClass().addClass('sidebar-first');
            }
            if (dir === '#second') {
                $('body').removeClass().addClass('sidebar-second');
            }
            if (dir === '#both') {
                $('body').removeClass().addClass('two-sidebars');
            }
            if (dir === '#none') {
                $('body').removeClass();
            }
            return $('body').attr('class');
        }
    };

    $(function () {
        OBC.layoutToggle.init($('.toggle'));
    });

    return OBC;

}(OBC || {}, jQuery));
