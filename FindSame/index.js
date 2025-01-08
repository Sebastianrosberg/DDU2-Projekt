const textBox = document.getElementById("textBox")
const resetButton = document.getElementById("reset")

main.addEventListener("click", function (event) {
    let numberOfDivs = 0;
    for (let divs of divsInMain) {
        divs.style.backgroundColor = "lightgrey";
        if (divs.textContent == event.target.textContent) {
            divs.style.backgroundColor = "lightgreen";
            numberOfDivs++;
        }
    }
    textBox.textContent = `${numberOfDivs} copies of the number ${event.target.textContent}`;
})

resetButton.addEventListener("click", function () {
    for (let divs of divsInMain) {
        divs.style.backgroundColor = "lightgrey";
    }
    textBox.textContent = "Click on a number to find copies";
})