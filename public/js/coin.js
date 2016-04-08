$(document).ready(function() {
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }

    $.preloadImages("http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_obverse.jpeg", "http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_reverse.jpeg");
    $('h1').addClass('animated fadeInDown');

    function flipACoin() {
        var flip = ["heads", "tails"];
        var side = flip[Math.floor(Math.random() * flip.length)];

        if (side == "heads") {
            $("#result").html("You Got " + side).addClass('animated pulse');
            $('h1').addClass('animated pulse');
            $(".image").html('<img class="heads" src="http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_obverse.jpeg"/>');
            $('.heads').addClass('animated flip');
        } else {
            $("#result").html("You Got " + side);
            $('h1').addClass('animated pulse');
            $(".image").html('<img class="tails" src="http://www.goldcoinhistory.com/wp-content/uploads/2012/05/GP_US_1850_C_Liberty_Head_One_Dollar_Type_I_reverse.jpeg"/>');
            $('.tails').addClass('animated flip');
        }
    }

    $(".flip").click(flipACoin);
});
