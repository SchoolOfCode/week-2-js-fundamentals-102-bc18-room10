let attempts = 0;
const correctPassword = "myPassword1!";
const secretInformation = "My favourite colour is #000080!";

while (attempts < 3) {
  let userInput = prompt("Please enter the password.");
  if (userInput === correctPassword) {
    alert(secretInformation);
    break;
  } else {
    attempts++;
  }
}

function authenticateUser() {
  while (attempts < 3) {
    let userInput = prompt("Please enter the password.");
    if (userInput === correctPassword) {
      return true;
    } else {
      attempts++;
    }
  }
  return false;
}

let isLoggedIn = authenticateUser();
if (isLoggedIn) {
  console.log(secretInformation);
}
