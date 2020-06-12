//Business Logic
function roboNumbers(number) {
  let returnNumbers = [];
  for(let i = 0; i <= number; i++){
    if(checkIfContains2(i)){
      returnNumbers.push("Boop!");
    } else if(checkIfContains1(i)) {
      returnNumbers.push("Beep!");
    } else {
      returnNumbers.push(i);
    }
  }
  return returnNumbers.toString();
}

function checkIfContains1(number) {
  for(const digit of number.toString()) {
    if(digit === "1") {
      return true;
    }
  }
  return false;
}

function checkIfContains2(number) {
  for(const digit of number.toString()) {
    if(digit === "2") {
      return true;
    }
  }
  return false;
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