$(document).on('turbolinks:load', function() {
    $('#calendar').each(function() {
        var calendar = $(this);
        calendar.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            eventLimit: true,
            theme: true,
            locale: 'ru',
            events: {
                url: '/meetings.json'
            },
            dayClick: function(date, jsEvent, view) {
                var clickDate = date.format();
                $('#dialog').dialog('open');
                // $.ajax({
                //   url:
                // })
            }
        })

    })
    $('#dialog').dialog({
        autoOpen: false,
        show: {
            effect: 'drop',
            duration: 500
        },
        hide: {
            effect: 'clip',
            duration: 200
        },
    });

    $('.timepicker').timepicker();

});
