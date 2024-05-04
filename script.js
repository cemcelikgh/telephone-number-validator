const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const cleanButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

userInput.addEventListener("keyup", enterInput);
checkButton.addEventListener("click", checkNumber);
cleanButton.addEventListener("click", clearCheckedNumbers);

const phoneNumberRegex = /(1 |1)?(([1-9][0-9]{2})|(\([1-9][0-9]{2}\)))( |-)?[0-9]{3}(-| )?[0-9]{4}/;

function enterInput(event) {
  if (event.key === "Enter") {
    checkNumber();
  }
}

function checkNumber() {
  let nmbr = userInput.value;
  if (nmbr === "") {
    alert("Please provide a phone number");
  } else if (nmbr.match(phoneNumberRegex) !== null && nmbr.match(phoneNumberRegex)[0] === nmbr) {  
    results.innerHTML += `<p class="val">Valid US number: ${nmbr}</p>`;;
  } else {
    results.innerHTML += `<p class ="inv">Invalid US number: ${nmbr}</p>`;
  }
  nmbr = "";
}

function clearCheckedNumbers() {
  results.innerHTML = "";
}