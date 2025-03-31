const value = document.getElementById('value');
const input = document.getElementById('range');
value.textContent = "0 min";
input.addEventListener("input", (event) => {
	if (event.target.value < 60) {
		value.textContent = event.target.value + " min";
	}
	else {
		value.textContent = Math.floor(event.target.value/60) + " h et " +  (event.target.value%60) + " min";
	}
});
