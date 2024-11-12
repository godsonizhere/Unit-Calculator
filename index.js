let converter = {
    meter: 3.281,
    liter: 0.264,
    kilogram: 2.204
};

const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const alertEl = document.getElementById("alert-el");
const meterEl = document.getElementById("meter-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

function render() {
    if (inputEl.value.trim() === "") {
        alertEl.textContent = "Please enter a value.";
        return;
    }

    const inputValue = parseFloat(inputEl.value);
    if (isNaN(inputValue)) {
        alertEl.textContent = "Please enter a valid number.";
        return;
    }

    alertEl.textContent = "";
    
    let meter = inputValue * converter.meter;
    let feet = inputValue / converter.meter;
    meterEl.innerHTML = `<p>${inputValue} meters = ${meter.toFixed(2)} feet | ${inputValue} feet = ${feet.toFixed(2)} meters</p>`;

    let liter = inputValue * converter.liter;
    let gallon = inputValue / 3.785;
    volumeEl.innerHTML = `<p>${inputValue} liters = ${liter.toFixed(2)} gallons | ${inputValue} gallons = ${gallon.toFixed(2)} liters</p>`;

    let kilogram = inputValue * converter.kilogram;
    let pound = inputValue * 2.204;
    massEl.innerHTML = `<p>${inputValue} kilos = ${kilogram.toFixed(2)} pounds | ${inputValue} pounds = ${pound.toFixed(2)} kilos</p>`;
}

buttonEl.addEventListener("click", function() {
    render();
});