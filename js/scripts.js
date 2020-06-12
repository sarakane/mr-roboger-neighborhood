$(document).ready(function() {
  $("form#beep-boop").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#user-input").val());
  });
});