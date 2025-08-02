// select the DOM element for output
const year = document.querySelector("#currentyear");

// use the date opbject
const today = new Date();

// display html
year.innerHTML = today.getFullYear();

let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

// wind chill factor
function windChillFactor(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    }
    else {
        return "N/A";
    }
}

document.querySelector("#wind-chill").innerHTML = windChillFactor(84, 18);