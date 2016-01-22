var keys = [];
    var konami = '38,38,40,40,37,39,37,39,66,65';

    $(document).keydown(function(e){
        keys.push( e.keyCode );
        if ( keys.toString().indexOf( konami ) >=0 ){

            keys = [];

           $('body').addClass('background').append ('<iframe width="0" height="0" src="https://www.youtube.com/embed/v83eOYu9Ad8?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe><div class="wrapper"><span class="shake shake-hard shake-constant"><h1 class="word">(~˘▾˘)~</h1></span></div>');
        }
    });
