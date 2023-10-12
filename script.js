const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");

const redCount = document.getElementById("redCount");
const greenCount = document.getElementById("greenCount");
const blueCount = document.getElementById("blueCount");
const totalCount = document.getElementById("totalCount");

let redClickCount = 0;
let greenClickCount = 0;
let blueClickCount = 0;
let totalClickCount = 0;

redButton.addEventListener("click", () => {
    redClickCount++;
    totalClickCount++;

    totalCount.textContent = totalClickCount;
    redCount.textContent = redClickCount;

    if (redClickCount % 2 === 1) {
        redButton.classList.remove("lightRed");
        redButton.classList.add("darkRed");
        blueButton.classList.remove("darkBlue");
        greenButton.classList.remove("darkGreen");

    } else {
        redButton.classList.remove("darkRed");
        redButton.classList.add("lightRed");
    }
});

greenButton.addEventListener("click", () => {
    greenClickCount++;
    totalClickCount++;

    totalCount.textContent = totalClickCount;
    greenCount.textContent = greenClickCount;

    if (greenClickCount % 3 === 1) {
        redButton.classList.remove("darkRed");
        redButton.classList.add("darkRed");
        blueButton.classList.remove("darkBlue");

    } else if (greenClickCount % 3 === 2) {
        redButton.classList.remove("darkRed");
        greenButton.classList.add("darkGreen");
        redButton.classList.add("lightRed");

    } else {
        greenButton.classList.remove("darkGreen");
    }
});

blueButton.addEventListener("click", () => {
    blueClickCount++;
    totalClickCount++;

    totalCount.textContent = totalClickCount;
    blueCount.textContent = blueClickCount;

    if (blueClickCount % 4 === 1) {
        redButton.classList.add("darkRed");
        greenButton.classList.remove("darkGreen");

    } else if (blueClickCount % 4 === 2) {
        redButton.classList.remove("darkRed");
        greenButton.classList.add("darkGreen");
        redButton.classList.add("lightRed");

    } else if (blueClickCount % 4 === 3) {
        greenButton.classList.remove("darkGreen");
        blueButton.classList.add("darkBlue");
    } else {
        blueButton.classList.remove("darkBlue");
        blueButton.classList.add("lightBlue");
    }
});