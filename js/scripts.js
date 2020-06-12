//Business Logic
function roboNumbers(number) {
  let returnNumbers = [];
  for(let i = 0; i <= number; i++){
    returnNumbers.push(i);
  }
  return returnNumbers.toString();
}

//User Interface Logic
$(document).ready(function() {
  $("form#beep-boop").submit(function (event) {
    event.preventDefault();
    const userInput = parseInt($("#user-input").val());

    const result = roboNumbers(userInput);
    $("#robogerfied-numbers").text(result);
  });
});