import { display, clear } from "./shell.js";

async function getLocation(location) {
	try {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}` + "&APPID=8518265030271130bd9b2081690a0e04", { mode: "cors" });
		const result = await response.json();
		const { name } = result;
		const { icon, description } = result.weather[0];
		const { temp, humidity } = result.main;
		const { speed } = result.wind;
		clear();
		display(name, icon, description, temp, humidity, speed);
		getMood(description);
	}
	catch (error) {
		console.log(error);
	}
}

// const background = document.getElementById("container");

async function getMood(description) {
	try {
		const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=4V6Odhr0ZQkMrtyWBvmoU2JuMtOTwLiI&s=" + `${description}`, { mode: "cors" });
		const descriptionData = await response.json();
		document.getElementById("wind-img").src = "" + descriptionData.data.images.original.url + "";
	}
	catch (error) {
		console.log(error);
	}
}

export { getLocation };