// select the DOM element for output
const year = document.querySelector("#currentyear");

// use the date opbject
const today = new Date();

// display html
year.innerHTML = today.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

renderProducts(products);

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function productTemplate(product) {
    return `<option value="${product.id}">${product.name}</option>`;
}

function renderProducts(products) {
    const html = products.map(productTemplate);
    document.querySelector("#products").innerHTML = html.join("");
}