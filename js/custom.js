;(function ($, window, document, undefined) {
    'use strict';



    $('.menu .menu-item-has-children a').click(function () {
        if ($(this).hasClass('sub-menu-pulled-up')) {
            $(this).removeClass('sub-menu-pulled-up');
            $(this).addClass('sub-menu-dropped-down');

            $(this).find('i').removeClass('fa-caret-down');
            $(this).find('i').addClass('fa-caret-up')
        } else if ($(this).hasClass('sub-menu-dropped-down')) {
            $(this).removeClass('sub-menu-dropped-down');
            $(this).addClass('sub-menu-pulled-up');

            $(this).find('i').removeClass('fa-caret-up');
            $(this).find('i').addClass('fa-caret-down')
        }
    });
    $(document).on('click', function(e) {
		e.stopPropagation();
		if (!$(e.target).closest(".aside-menu .topmenu .menu").length) {
			if (($(window).width() > 1024)) {
                if ($('#topmenu').hasClass('active-menu')) {
                    $('#topmenu').removeClass('active-menu')
                };
                if ($('header.aside-menu').hasClass('active-menu')) {
                    $('header.aside-menu').removeClass('active-menu')
                }
			}
		}
	})
})(jQuery, window, document);