function SetTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var period = '';

  if (hour < 12) {
    period = 'AM';
  }
  if (hour === 12) {
    period = 'PM';
  }
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour -= 12;
    period = "PM";
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (period == "PM") {
    $('html').removeClass("day");
    $('html').addClass("night");
  }
  if (period == "AM") {
    $('html').removeClass("night");
    $('html').addClass("day");
  }
  $('.hour').text(hour);
  $('.minute').text(minute);
  $('.period').text(period);
}

$(document).ready(function() {
  SetTime();
  setInterval(SetTime, 1000);
});
