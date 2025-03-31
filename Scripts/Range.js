const value = document.getElementById('value');
const input = document.getElementById('range');
value.textContent = input.value + " min";
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + " min";
});
