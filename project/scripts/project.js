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

const homeImages = [
	{
		name: "Waimea Hike",
		imagePath: "images/hike/waterfall-2.webp",
		urlLink: "hike.html"
	},
	{
		name: "Pupukea (Three Tables) Beach",
		imagePath: "images/beach/balcony.webp",
		urlLink: "beach.html"
	},
	{
		name: "Pearl Harbor",
		imagePath: "images/harbor/pearl-harbor.webp",
		urlLink: "harbor.html"
	},
	{
		name: "Polynesian Cultural Center",
		imagePath: "images/pcc/pcc.webp",
		urlLink: "harbor.html"
	}
];

const hikeImages = [
	{
		name: "Aloe",
		imagePath: "images/hike/aloe.webp"
	},
	{
		name: "Red Flower",
		imagePath: "images/hike/flower.webp"
	},
	{
		name: "Purple Flower",
		imagePath: "images/hike/flower-2.webp"
	},
	{
		name: "Flowers",
		imagePath: "images/hike/flower-3.webp"
	},
	{
		name: "White Flower",
		imagePath: "images/hike/flower-4.webp"
	},
	{
		name: "Yellow Flower",
		imagePath: "images/hike/flower-5.webp"
	},
	{
		name: "Colorful Plant",
		imagePath: "images/hike/plant.webp"
	},
	{
		name: "Fun Plant",
		imagePath: "images/hike/plant-2.webp"
	},
	{
		name: "Fuzzy Plant",
		imagePath: "images/hike/plant-3.webp"
	},
	{
		name: "Cactus-looking Plant",
		imagePath: "images/hike/plant-4.webp"
	},
	{
		name: "Waterfall Sign",
		imagePath: "images/hike/waterfall.webp"
	},
	{
		name: "Waterfall",
		imagePath: "images/hike/waterfall-2.webp"
	},
	{
		name: "Waterfall",
		imagePath: "images/hike/waterfall-3.webp"
	},
	{
		name: "Waterfall",
		imagePath: "images/hike/waterfall-4.webp"
	}
];

const beachImages = [
	{
		name: "Beach from Balcony",
		imagePath: "images/beach/balcony.webp"
	},
	{
		name: "Beach from Balcony",
		imagePath: "images/beach/balcony-2.webp"
	},
	{
		name: "Beach from Balcony with Sunset",
		imagePath: "images/beach/balcony-3.webp"
	},
	{
		name: "Crab",
		imagePath: "images/beach/crab.webp"
	},
	{
		name: "Snorkeling",
		imagePath: "images/beach/snorkel.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-2.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-3.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-4.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-5.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-6.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-7.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-8.webp"
	},
	{
		name: "Tide Pool",
		imagePath: "images/beach/tide-pool-9.webp"
	},
	{
		name: "Wave",
		imagePath: "images/beach/wave.webp"
	},
	{
		name: "Wave",
		imagePath: "images/beach/wave-over-tables.webp"
	}
];

const pccImages = [
	{
		name: "Canoe",
		imagePath: "images/pcc/canoe.webp"
	},
	{
		name: "PCC",
		imagePath: "images/pcc/pcc-2.webp"
	},
	{
		name: "PCC",
		imagePath: "images/pcc/pcc-3.webp"
	},
	{
		name: "PCC",
		imagePath: "images/pcc/pcc-4.webp"
	},
	{
		name: "PCC",
		imagePath: "images/pcc/pcc-5.webp"
	},
	{
		name: "Aotearoa (New Zealand)",
		imagePath: "images/pcc/aotearoa.webp"
	},
	{
		name: "Hawaii",
		imagePath: "images/pcc/hawaii.webp"
	},
	{
		name: "Samoa",
		imagePath: "images/pcc/samoa.webp"
	},
	{
		name: "Tahiti",
		imagePath: "images/pcc/tahiti.webp"
	},
	{
		name: "Tonga",
		imagePath: "images/pcc/tonga.webp"
	},
	{
		name: "PCC",
		imagePath: "images/pcc/pcc.webp"
	},
	{
		name: "Turtle",
		imagePath: "images/pcc/turtle.webp"
	}
];

const harborImages = [
	{
		name: "Plane",
		imagePath: "images/harbor/airfield.webp"
	},
	{
		name: "Plane",
		imagePath: "images/harbor/airfield-2.webp"
	},
	{
		name: "Plane",
		imagePath: "images/harbor/airfield-3.webp"
	},
	{
		name: "Window with Bullet Holes",
		imagePath: "images/harbor/windows.webp"
	},
	{
		name: "Window with Bullet Holes",
		imagePath: "images/harbor/windows-2.webp"
	},
	{
		name: "Arizona Memorial",
		imagePath: "images/harbor/memorial.webp"
	},
	{
		name: "Arizona Memorial",
		imagePath: "images/harbor/memorial-2.webp"
	},
	{
		name: "Arizona Memorial",
		imagePath: "images/harbor/memorial-3.webp"
	},
	{
		name: "Arizona Memorial",
		imagePath: "images/harbor/memorial-4.webp"
	},
	{
		name: "Arizona Memorial",
		imagePath: "images/harbor/memorial-5.webp"
	},
	{
		name: "Arizona Memorial",
		imagePath: "images/harbor/memorial-6.webp"
	},
	{
		name: "Arizona Memorial",
		imagePath: "images/harbor/meorial-7.webp"
	},
	{
		name: "Fish at Arizona Memorial",
		imagePath: "images/harbor/fish.webp"
	},
	{
		name: "Missouri",
		imagePath: "images/harbor/missouri.webp"
	},
	{
		name: "Missouri",
		imagePath: "images/harbor/missouri-2.webp"
	},
	{
		name: "Missouri",
		imagePath: "images/harbor/missouri-3.webp"
	},
	{
		name: "Missouri",
		imagePath: "images/harbor/missouri-4.webp"
	},
	{
		name: "Missouri",
		imagePath: "images/harbor/missouri-5.webp"
	}
];

renderHomeImages(homeImages);

const home = document.querySelector("#home");
home.addEventListener("click", () => {
	renderHomeImages(homeImages);
});

const hike = document.querySelector("#hike");
hike.addEventListener("click", () => {
	renderHikingImages(hikeImages);
});

const beach = document.querySelector("#beach");
beach.addEventListener("click", () => {
	renderBeachImages(beachImages);
});

const pcc = document.querySelector("#pcc");
pcc.addEventListener("click", () => {
	renderPccImages(pccImages);
});

const harbor = document.querySelector("#harbor");
harbor.addEventListener("click", () => {
	renderHarborImages(harborImages);
});

function imageHomeTemplate(image) {
	return `<div class="image">
				<a href=${image.urlLink}>
					<img src=${image.imagePath} alt=${image.name} loading="lazy">
					<div class="container">
						<h2>${image.name}</h2>
					</div>
				</a>
			</div>`;
}

function renderHomeImages(images) {
	const html = images.map(imageHomeTemplate);
	document.querySelector("#places").innerHTML = html.join("");
}

function imageTemplate(image) {
	return `<div class="image">
				<img src=${image.imagePath} alt=${image.name} loading="lazy">
				<div class="container">
					<h2>${image.name}</h2>
				</div>
			</div>`;
}

function renderHikingImages(images) {
	const html = images.map(imageTemplate);
	document.querySelector("#hikingImages").innerHTML = html.join("");
}

function renderBeachImages(images) {
	const html = images.map(imageTemplate);
	document.querySelector("#beachImages").innerHTML = html.join("");
}

function renderPccImages(images) {
	const html = images.map(imageTemplate);
	document.querySelector("#pccImages").innerHTML = html.join("");
}

function renderHarborImages(images) {
	const html = images.map(imageTemplate);
	document.querySelector("#harborImages").innerHTML = html.join("");
}