// select the DOM element for output
const year = document.querySelector("#currentyear");
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// use the date opbject
const today = new Date();

// display html
year.innerHTML = today.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

// menu navigation and hamburger
hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});