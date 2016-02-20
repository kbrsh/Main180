(function() {
		var lolBtn = $("#lol"),
		count = 0;

	function randNum(num) {
		return Math.floor(Math.random() * num);
	}

	function resetLolBtn() {
		$(this).css({
			position: "static"
		});
	}

	
	lolBtn.on("mouseover", function() {
		console.log("whoops");
		count += 1;
		console.log(count);

		resetLolBtn();

		$(this).css({
			position: "absolute",
			top: randNum(90) + "%",
			left: randNum(90) + "%"
		});
	});
	lolBtn.on("click", function() {
		alert("Either there was a glitch in the matrix or you are one sly devil. It took you " + count + " attempts.")
		alert("Don't forget to comment your number of attempts. I hope you enjoyed this pen. =)");
		modal.fadeOut(150);
	});

}())
