// Accept user input
//Easy way  - window prompt

// let userName = window.prompt("What is your name?");
// console.log(userName);

// Harder way - HTML textbox
document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
};
