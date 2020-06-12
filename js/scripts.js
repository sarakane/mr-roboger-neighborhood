//Business Logic

/* Function takes a number and loops from 0 to that number (inclusive). 
Within the loop each number is passed to a function to see if that number contains a 3 and if so pushes "Won't you be my neighbor?" to the array.
If the number doesn't contain a 3, it is then checked to see if it conatains a 2 and if so pushes "Boop!" to the array.
If the number doesn't contain a 2 or 3 it is then checked to see if it contains a 1 and if so pushes "Beep!" to the array.
If the number doesn't contain a 1, 2, or 3 the number itself is pushed to the array.
The array is then passed to the fixFormatting funtion which returns the array as a string and adds spaces after each comma in the string*/
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

//
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
    $("#output").text(result);
  });
});