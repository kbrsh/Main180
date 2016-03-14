   var speech = function() {

     var recognition = new webkitSpeechRecognition();
     recognition.continuous = true;
     recognition.interimResults = true;

     recognition.onresult = function(event) {
       var colour = event.results[event.results.length - 1][0].transcript;
       // turn it into lowercase
       colour = colour.toLowerCase();
       // take out the spaces
       colour = colour.replace(/\s/gi, '');
       $('body').css('background', colour);
       $('h1').text(colour);
     }
     recognition.start();

   }

   if (!('webkitSpeechRecognition' in window)) {
     alert("Your browser does not support speech, get Chrome!");
   } else {
     speech();
   }
