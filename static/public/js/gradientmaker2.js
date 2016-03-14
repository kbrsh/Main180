(function () {
    var color1, color2, slider;
    color1 = '#FC354C';
    color2 = '#0ABFBC';
    slider = 180;
    $('#range').slider({
        range: 'min',
        max: 360,
        value: 180,
        slide: function (e, ui) {
            var bg;
            slider = ui.value;
            $('#spanVal').html(slider + 'deg');
            bg = 'linear-gradient(' + slider + 'deg,' + color1 + ',' + color2 + ')';
            $('.gradient').css('background-image', bg);
            $('.one').css('color', color1);
            return $('.two').css('color', color2);
        }
    });
    $('.one').keyup(function () {
        var bg;
        color1 = $('.one').val();
        color2 = $('.two').val();
        bg = 'linear-gradient(' + slider + 'deg,' + color1 + ',' + color2 + ')';
        $('.gradient').css('background-image', bg);
        return $('.one').css('color', color1);
    });
    $('.two').keyup(function () {
        var bg;
        color1 = $('.one').val();
        color2 = $('.two').val();
        bg = 'linear-gradient(' + slider + 'deg,' + color1 + ',' + color2 + ')';
        $('.gradient').css('background-image', bg);
        return $('.two').css('color', color2);
    });
}.call(this));
