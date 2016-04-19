var tolerance_ms = 500,
    start,
    end,
    clicks = 0, 
    wrong = false, 
    timeout;

$("#area").mousedown(function(e){ click(e); });

function click(e){
  if(clicks==0) {
    start = new Date();
    wrong = false;
  } else {
    end = new Date();
    if(Math.abs((end-start)-pass[clicks])>tolerance_ms) 
      wrong = true;
  }
  status("");
  circle(e); //demo only
  clicks++;
  clearTimeout(timeout);
  timeout = setTimeout(function(){ check(); },1000);
}
  
function check(){
  //check password
  (wrong||clicks!=pass.length) ? error() : success();
  clicks = 0;
  $(".circle").remove(); //demo only
}

function success() {
  //success callback
  status("success");
}
function error() {
  //error callback
  status("error");
}

function status(stat) {
  $("body").attr("class", stat);
}

status("ready");

//demo only
var pass = [0, 373, 556, 724, 1173, 2038, 2463];

function showPassword(){
  status("");
  var e = {
    pageX : $(window).width()/2,
    pageY : $(window).height()/2
  };
  $.each(pass, function(){
    setTimeout(function(){
      circle(e);
    },this)
  });
}

$("#show").click(function(){ showPassword(); });

function circle(e) {
  //draw circle: for demo purposes only
  $("body").append(
    $("<div>").addClass("circle").css({
      left : e.pageX,
      top : e.pageY
    })
  );
} 
