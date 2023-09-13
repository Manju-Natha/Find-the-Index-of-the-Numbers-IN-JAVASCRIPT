let numbers = [17, 31, 77, 20, 63];

let userInputEl = document.getElementById("userInput");
let indexOfNumberEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
  let index = parseInt(userInputEl.value);
  let findIndexNumber = numbers.findIndex(function (eachIndex) {
    if (userInputEl === "") {
      alert("Please Enter valid Number");
    }

    if (eachIndex === index) {
      return true;
    } else {
      return false;
    }
  });
  indexOfNumberEl.textContent = findIndexNumber;
}
