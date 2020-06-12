
//User Interface Logic
$(document).ready(function() {
  $("form#beep-boop").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#user-input").val());

    $("#robogerfied-numbers").text(userInput);
  });
});