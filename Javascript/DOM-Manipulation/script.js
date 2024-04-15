console.log(document.body);

var newElement = document.createElement("p");
// var newContent = document.createTextNode("Hello World");
// newElement.appendChild(newContent);

newElement.innerHTML = "<b>Hello World</b>";
document.body.append(newElement);

const devrabic = document.querySelector("#myId");

devrabic.style.color = "red";

const anchor = document.querySelector("a");

anchor.setAttribute("href", "https://facebook.com");
const link = anchor.getAttribute("href");
console.log(link);

const myList = document.querySelectorAll(".myList li");

console.log(myList);

for (list of myList) {
  list.classList.add("customList");
  list.classList.remove("removableClass");
}

devrabic.remove();
