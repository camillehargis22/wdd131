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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "Laie Hawaii Temple",
	location: "Laie, Hawaii",
	dedicated: "1919, November, 27",
	area: 42100,
	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-772761-wallpaper.jpg"
  },
  {
	templeName: "Kona Hawaii Temple",
	location: "Kailua-Kona, Hawaii",
	dedicated: "2000, January, 23",
	area: 12325,
	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kona-hawaii/400x250/kona-hawaii-temple-lds-912837-wallpaper.jpg"
  },
  {
	templeName: "Bountiful Utah Temple",
	location: "Bountiful, Utah",
	dedicated: "1995, January, 8",
	area: 104000,
	imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x400/bountiful-utah-temple-83074.jpg"
  }
];

renderCards(temples);

const homeTemples = document.querySelector("#home");
homeTemples.addEventListener("click", () => {
	renderCards(temples);
});

function getYear(temple) {
	let d = new Date(temple.dedicated);
	return d.getFullYear();
}

const oldTemplesLink = document.querySelector("#old");
oldTemplesLink.addEventListener("click", () => {
	let oldTemples = temples.filter(temple => getYear(temple) < 1900);
	renderCards(oldTemples);
});

const newTemplesLink = document.querySelector("#new");
newTemplesLink.addEventListener("click", () => {
	let newTemples = temples.filter(temple => getYear(temple) > 2000);
	renderCards(newTemples);
});

const largeTemplesLink = document.querySelector("#large");
largeTemplesLink.addEventListener("click", () => {
	let largeTemples = temples.filter(temple => temple.area > 90000);
	renderCards(largeTemples);
});

const smallTemplesLink = document.querySelector("#small");
smallTemplesLink.addEventListener("click", () => {
	let smallTemples = temples.filter(temple => temple.area < 10000);
	renderCards(smallTemples);
});

function cardTemplate(card) {
	return `<div class="card">
				<div class="container">
					<h2>${card.templeName}</h2>
					<p>LOCATION: ${card.location}</p>
					<p>DEDICATED: ${card.dedicated}</p>
					<p>SIZE: ${card.area}</p>
				</div>
				<img src=${card.imageUrl} alt=${card.templeName} loading="lazy">
			</div>`;
}

function renderCards(cards) {
	const html = cards.map(cardTemplate);
	document.querySelector("#cards").innerHTML = html.join("");
}