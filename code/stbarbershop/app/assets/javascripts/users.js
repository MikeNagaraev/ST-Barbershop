$(document).on('turbolinks:load', function() {
    $(document).ready(function() {
        var navItems = $('.nav-menu li > a');
        var navListItems = $('.nav-menu li');
        var allWells = $('.menu-content');
        var allWellsExceptFirst = $('.menu-content:not(:first)');

        allWellsExceptFirst.hide();
        navItems.click(function(e) {
            e.preventDefault();
            navListItems.removeClass('active');
            $(this).closest('li').addClass('active');

            allWells.hide();
            var target = $(this).attr('href');
            var activeTab = $(target);
            $(activeTab).show();
        });
    });

    $('#profile-menu a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
    // store the currently selected tab in the hash value
    $("ul.nav-menu > li > a").on("shown.bs.tab", function(e) {
        var id = $(e.target).attr("href").substr(1);
        window.location.hash = id;
    });

    // on load of the page: switch to the currently selected tab
    var hash = window.location.hash;
    $('#profile-menu a[href="' + hash + '"]').tab('show');
});
