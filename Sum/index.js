const sumOfAllBox = document.getElementById("sumOfAll");
const sumOfMarkedBoxes = document.getElementById("sumOfMarked")
const resetButton = document.getElementById("resetSum")
let sumOfDiv = 0;

function updateSum() {
    sumOfDiv = 0;
    for (let divs of divsInMain) {
        sumOfDiv += Number(divs.textContent);
    }
    sumOfAllBox.value = sumOfDiv
}


updateSum()
sumOfDivNumbers = 0;
main.addEventListener("click", function (event) {
    if (event.target.classList.contains("numberDivs")) {
        event.target.style.backgroundColor = "lightgreen"
        sumOfDivNumbers += Number(event.target.textContent)
        console.log(sumOfDivNumbers)
        sumOfMarkedBoxes.value = sumOfDivNumbers;
    }
})

resetButton.addEventListener("click", function () {
    for (let divs of divsInMain) {
        divs.style.backgroundColor = "lightgrey"
        sumOfDivNumbers = 0;
        sumOfMarkedBoxes.value = " ";
    }
})


