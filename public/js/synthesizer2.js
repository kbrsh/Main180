var audioContext = new AudioContext();
var note = null;

function playNote(frequency) {
   if(note !== null) {
   	stopNote(note.frequency.value);
   }
   note = audioContext.createOscillator();
	note.frequency.value = frequency;
	note.detune.value = 0;
	note.type = note.SINE;
	note.connect(audioContext.destination);
	note.start(0);
   $('[data-note="'+frequency+'"]').addClass('active');
}
function stopNote(frequency) {
   if(note !== null && note.frequency.value == frequency) {
		note.stop();
   	note = null;
      $('[data-note="'+frequency+'"]').removeClass('active');
   }
}

$(document).on('click', '[data-key]:not(.active)', function(){
   playNote($(this).data('note'));
});
$(document).on('click', '[data-key].active', function(){
   stopNote($(this).data('note'));
});
$(document).on('keydown', function(event){
   var key = $('[data-key="'+String.fromCharCode(event.which)+'"]');
   if(!key.is('.active')) {
      key.trigger('click');
   }
});
$(document).on('keyup', function(event){
   var key = $('[data-key="'+String.fromCharCode(event.which)+'"]');
   if(key.is('.active')) {
      key.trigger('click');
   }
});

/* Play music! */
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
$(document).on('click', '.play:not([disabled])', function(){
  var notes = ['K','J','K','J','K','D','H','F','A','T','Y','A','D','R','Y','A','F','A','K','J','K','J','K','D','H','F','A','T','Y','A','D','Y','F','D','A','D','F','H','K','O','L','K','H','O','K','H','F','O','H','F','D','K','J','K','J','K','D','H','F','A','A']
  $('.play').attr('disabled', 'true').blur();
  $.each(notes, function(e) {
    $('[data-key]').removeClass('active');
    $('[data-key="'+notes[e]+'"]').addClass('active').click();
    sleep(200);
  });
  $('.play').removeAttr('disabled');
});
