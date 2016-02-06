$(".gen-btn")
  .bind("webkitAnimationEnd mozAnimationEnd animationEnd", function() {
    $(this).removeClass("animated");
  })
  .click(function() {
    $(this).addClass("animated");

    setTimeout(function() {
      showModal();
    }, 400);
  })

$('.close-btn').click(function() {
  hideModal();
});

function showModal() {
  var $modal = $('.modal');
  
  genZigZag();

  $modal.addClass('visible');
}

function hideModal() {
  var $modal = $('.modal');

  $modal.removeClass('visible');
}

function zigZagPart() {
  var numQuotes = 11;
  var rand = Math.ceil(numQuotes * Math.random());
  
  switch (rand) {
    case 1:
      return "The poke button on facebook is awesome But I think there should be a stab button ";
      break;
    case 2:
      return "was riding a horse yesterday and fell off. I almost got killed! THANK GOODNESS the Walmart greeter saw what happened and came over and unplugged it. ";
      break;
    case 3:
      return "anyone who says \"nothing is impossible\" has obviously never tried to staple jello to a tree. ";
      break;
    case 4: 
      return "don\'t you hate it when you're texting and laying on your back and your phone decides to be a ninja, slips through your fingers, and attacks your face! ";
      break;
      case 5:
      return "Pshhhh I did not fall... The floor looked at me funny so I used my mad ninja skills to attack ";
      break;
      case 6:
      return "I didn't trip, I... I was... uh... just... uh... checking the gravity! Yeah! Just so you know, it's all good, it still works. ";
      break;
      case 7:
      return "i wonder if its bad when I'm talking to myself and I'm not even listening ";
      break;
      case 8:
      return "This year I\'m using big words to sound smart... Sorry, I meant utilizing gargantuan idioms to simulate intelligence.";
      break;
      case 9:
      return "Like a weird neighbor, stalkers are there! ";
      break;
      case 10:
      return "OK think of a number. Add 12 to the number. Subtract 2. Divide that number by 5. Add 20. Did you get 12? Neither did I. I just wanted to see if you would do it! ";
      break;
      case 11:
      return "Eat your foot.";
  }
  
}

function genZigZag() {
  var out = '';

  var len = Math.round(Math.random() * 1000) + 4000;
  for (var i = 0; i < len; i++) {
    out += zigZagPart();
    out += " ";
  }
  
  $('.zigzag').html(out);
};
