var user;
var computer;

$('.choice').click(function() {
   user = this.id;
   computer = Math.random();

   if (computer <= 1/3) {
     computer = "rock";
   } else if (computer < 2/3) {
     computer = "scissors";
   } else {
     computer = "paper";
   }
  var winner=compare(user,computer);
  console.log(winner);
  $("h1").html(winner.str);
  $('.choice').css("box-shadow", "none");
  if (winner.ner == "tie") {
  	$(this).css("box-shadow", "0px 0px 25px 10px #F2E8C4");
  } else if (winner.ner == "win") {
  	$(this).css("box-shadow", "0px 0px 25px 10px #3EC9A7");
  } else {
  	$(this).css("box-shadow", "0px 0px 25px 10px #E32B09");
  }

});

var compare = function(user, computer) {
	var obj = {
		str: "",
		ner: ""
	}
	var rock = "Rock crushes scissors."
	var paper = "Paper covers rock."
	var scissors = "Scissors cut paper."
	var win = "You win! 😀"
	var lose = "You lose..."
  if (user === computer) {
  	obj.str = "The result is a tie.";
  	obj.ner = "tie";
  } 
  else if (user === "rock") {
    if (computer ==="scissors") {
      obj.str = rock + " " + win;
      obj.ner = "win";
    }
    else {
      obj.str = paper + " " + lose;
      obj.ner = "lose";
    }
  }
   else if (user === "paper") {
     if (computer === "rock") {
       obj.str = paper + " " + win;
       obj.ner = "win";
     }
     else {
       obj.str = scissors + " " + lose;
       obj.ner = "lose";
     }
   }
   else if (user === "scissors") {
   	if (computer === "rock") {
   		obj.str = rock + " " + lose;
   		obj.ner = "lose";
   	}
   	else {
   		obj.str = scissors + " " + win;
   		obj.ner = "win";
   	}
   }

   return obj;
};
