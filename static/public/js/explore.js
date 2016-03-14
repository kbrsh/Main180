$(document).ready(function(){
   $(document).mousemove(function(event){
      $("#light").css({"top": event.pageY - 250, "left": event.pageX - 250}); 
   });
});
