import "./style.css";
import {getLocation} from "./calls";
import {toggle} from "./shell";

//adds event listeners to the search bar
window.onload = function () {
	const input = document.getElementById("search");
	const lupe = document.getElementById("lupe");
	const slider = document.getElementById("slider");

	input.addEventListener("keydown", (e) => {
		const location = input.value;
		if (e.key === "Enter") {
			getLocation(location);
			e.preventDefault();
		}
	});

	lupe.addEventListener("click", (e) => {
		const location = input.value;
		getLocation(location);
		e.preventDefault();
	});

	slider.addEventListener("click", () => {
		toggle();
	});
};