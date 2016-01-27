(function () {
    $('#range').slider({
        range: 'min',
        max: 360,
        value: 180,
        slide: function (e, ui) {
            var bg;
            $('#spanVal').html(ui.value);
            bg = 'linear-gradient(' + ui.value + 'deg,#c2e59c,#64b3f4)';
            return $('.gradient').css('background-image', bg);
        }
    });
}.call(this));
