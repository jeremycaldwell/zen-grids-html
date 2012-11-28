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
                $('body').toggleClass('sidebar-first').removeClass('two-sidebars sidebar-second');
            }
            if (dir === '#last') {
                $('body').toggleClass('sidebar-second').removeClass('two-sidebars sidebar-first');
            }
            if (dir === '#both') {
                $('body').toggleClass('two-sidebars').removeClass('sidebar-first sidebar-second');
            }
            if (dir === '#none') {
                $('body').toggleClass('none').removeClass('two-sidebars sidebar-first sidebar-second');
            }
            return $('body').attr('class');
        }
    };

    $(function () {
        OBC.layoutToggle.init($('.toggle'));
    });

    return OBC;

}(OBC || {}, jQuery));