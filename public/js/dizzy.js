window.onload =function (argument) {
	var path = document.all.pathId,
		text = document.all.textId,
		str = "M0 0";

		for(var i = 0;i<40;i++){
			str += "l1400 0 q10 5 0 10 l-1400 0 q-10 5 0 10";
		}

	str += "l1400 0 q10 5 0 0 l-1400 0";
	path.attributes.d.value = str;

	var length = Math.round(length = path.getTotalLength())+1;
	console.log(length);
	path.setAttribute("stroke-dashoffset",length);


	// str = more("Hello");

	// text.innerHTML = str;
	// text.innerHTML = str;
	// console.log(path);


}

function more (str) {
	for (var i = 0; i < 15; i++) {
		str += str;
	};
	return str;
}
