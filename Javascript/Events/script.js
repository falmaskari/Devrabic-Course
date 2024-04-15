const myButton = document.querySelector("button");
const myDiv = document.querySelector("div");
const myForm = document.querySelector("form");
const myInput = document.querySelector("#name");

myButton.addEventListener("click", (e) => {
  // console.log("hi");
  // console.log(e.target);
  myDiv.removeEventListener("mouseover", sayMouseOver);
});

// myDiv.addEventListener("mouseover", sayMouseOver);

function sayMouseOver() {
  alert("mouse over");
}

// myInput.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#name");
  const passwordInput = document.querySelector("#password");

  const name = nameInput.value;
  const password = passwordInput.value;

  console.log(`Name: ${name}; Password: ${password}`);
});
