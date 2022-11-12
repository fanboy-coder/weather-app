function display(name, icon, description, temp, humidity, speed) {
	let input = document.getElementById("search");
	input.value = "";
	//creates the box to display the weather
	const display = document.getElementById("display");
	const weatherbox = display.appendChild(document.createElement("div"));
	weatherbox.setAttribute("id", "weatherbox");

	//updates the headline with the city's name
	const city = document.getElementById("city");
	city.innerText = "Here's the weather in " + name;

	//creates a div with the weather data
	const databox = weatherbox.appendChild(document.createElement("div"));
	databox.setAttribute("id", "databox");

	//creates a column to display the current weather
	const weathericon = databox.appendChild(document.createElement("div"));
	weathericon.setAttribute("id", "icon");
	weathericon.setAttribute("class","box");
	const box1 = weathericon.appendChild(document.createElement("div"));
	const weatherh4 = box1.appendChild(document.createElement("h4"));
	weatherh4.innerText = "Right now";
	const box2 = weathericon.appendChild(document.createElement("div"));
	const image = box2.appendChild(document.createElement("img"));
	image.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
	const box3 = weathericon.appendChild(document.createElement("div"));
	const p = box3.appendChild(document.createElement("p"));
	p.innerText = description;

	//creates a column to display the temperature
	const weathertemperature = databox.appendChild(document.createElement("div"));
	weathertemperature.setAttribute("id", "temperature");
	weathertemperature.setAttribute("class","box");
	const box4 = weathertemperature.appendChild(document.createElement("div"));
	const temperatureh4 = box4.appendChild(document.createElement("h4"));
	temperatureh4.innerText = "Temperature";
	const box5 = weathertemperature.appendChild(document.createElement("div"));
	const temperatureimg = box5.appendChild(document.createElement("img"));
	temperatureimg.src = "../src/images/thermometer.svg";
	const box6 = weathertemperature.appendChild(document.createElement("div"));
	box6.setAttribute("id","temp-display");
	const box6a = box6.appendChild(document.createElement("div"));
	const temperaturep1 = box6a.appendChild(document.createElement("p"));
	temperaturep1.setAttribute("id","temp-value");
	temperaturep1.innerText = Math.round(temp - 273,15)*10/10;
	const box6b = box6.appendChild(document.createElement("div"));
	const temperaturep2 = box6b.appendChild(document.createElement("p"));
	temperaturep2.setAttribute("id","degrees");
	temperaturep2.innerText = "ºC";

	//creates a column to display the humidity
	const weatherhumidity = databox.appendChild(document.createElement("div"));
	weatherhumidity.setAttribute("id", "humidity");
	weatherhumidity.setAttribute("class","box");
	const box7 = weatherhumidity.appendChild(document.createElement("div"));
	const humidityh4 = box7.appendChild(document.createElement("h4"));
	humidityh4.innerText = "Humidity";
	const box8 = weatherhumidity.appendChild(document.createElement("div"));
	const humidityimg = box8.appendChild(document.createElement("img"));
	humidityimg.src = "../src/images/water.svg";
	const box9 = weatherhumidity.appendChild(document.createElement("div"));
	const humidityp3 = box9.appendChild(document.createElement("p"));
	humidityp3.innerText = humidity + "%";

	//creates a box to display the wind speed
	const weatherwind = databox.appendChild(document.createElement("div"));
	weatherwind.setAttribute("id", "wind");
	weatherwind.setAttribute("class","box");
	const box10 = weatherwind.appendChild(document.createElement("div"));
	const windh4 = box10.appendChild(document.createElement("h4"));
	windh4.innerText = "Wind";
	const box11 = weatherwind.appendChild(document.createElement("div"));
	const windimg = box11.appendChild(document.createElement("img"));
	windimg.src = "../src/images/weather-windy.svg";
	const box12 = weatherwind.appendChild(document.createElement("div"));
	const windp4 = box12.appendChild(document.createElement("p"));
	windp4.innerText = speed + "m/s";

	//creates a column to display the mood
	const weathermood = databox.appendChild(document.createElement("div"));
	weathermood.setAttribute("id","mood");
	weathermood.setAttribute("class","box");
	const box13 = weathermood.appendChild(document.createElement("div"));
	const moodh4 = box13.appendChild(document.createElement("h4"));
	moodh4.innerText = "Mood";
	const box14 = weathermood.appendChild(document.createElement("img"));
	box14.setAttribute("id","wind-img");
	const box15 = weathermood.appendChild(document.createElement("div"));

	const toggle = document.getElementById("toggle");
	toggle.style.visibility = "visible";
}

//clears the weather display box
function clear () {
	const weatherbox = document.getElementById("weatherbox");
	const toggle = document.getElementById("toggle");
			
	if (weatherbox) {
		weatherbox.remove();
		toggle.style.visibility = "hidden";
	}
}

// toggles between celsius and farenheit
function toggle () {
	let temperature = document.getElementById("temp-value");
	let metric = document.getElementById("degrees");

	if(metric.innerText === "ºC") {
		metric.innerText = "ºF";
		temperature.innerText = Math.round(temperature.innerText *1.8 +32);
	}
	else {
		metric.innerText = "ºC";
		temperature.innerText = Math.round((temperature.innerText - 32) /1.8);
	}
};

export { display, clear, toggle };