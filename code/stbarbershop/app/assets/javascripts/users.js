$(document).on('turbolinks:load', function() {
    $(document).ready(function()
    {
        var navItems = $('.nav-menu li > a');
        var navListItems = $('.nav-menu li');
        var allWells = $('.menu-content');
        var allWellsExceptFirst = $('.menu-content:not(:first)');

        allWellsExceptFirst.hide();
        navItems.click(function(e)
        {
            e.preventDefault();
            navListItems.removeClass('active');
            $(this).closest('li').addClass('active');

            allWells.hide();
            var target = $(this).attr('data-target-id');
            $('#' + target).show();
        });
    });
});
