//Business Logic
function roboNumbers(number) {
  const numbersArray = [];
  for(let i = 0; i <= number; i++){
    if (checkIfContains3(i)){
      numbersArray.push("Won't you be my neighbor?");
    } else if(checkIfContains2(i)) {
      numbersArray.push("Boop!");
    } else if(checkIfContains1(i)) {
      numbersArray.push("Beep!");
    } else {
      numbersArray.push(i);
    }
  }
  return fixFormatting(numbersArray);
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

function checkIfContains3(number) {
  for(const digit of number.toString()) {
    if(digit === "3") {
      return true;
    }
  }
  return false;
}

function fixFormatting(input) {
  const regex = /,/g;
  return input.toString().replace(regex, ', ');
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