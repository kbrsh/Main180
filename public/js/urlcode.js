var currentText;

$('input').on("keyup", function() {
  currentText = $('input').val();
  window.history.pushState("Current Text", "Current Text", currentText)
});
