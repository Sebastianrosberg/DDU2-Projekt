
const createValue = document.getElementById("grid")
const createButton = document.getElementById("create");
const gridInput = document.getElementById("grid");
const main = document.createElement("main");
document.body.appendChild(main);
let randomNumberArray = [];
let divsInMain;
createValue.value = `95`

function createDivs(input) {
    main.innerHTML = " ";
    let randomNumberArray = [];
    for (let i = 0; i < input; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        randomNumberArray.push(randomNumber);
        const randomNumberDiv = document.createElement("div");
        randomNumberDiv.classList.add("numberDivs")
        main.appendChild(randomNumberDiv);

        randomNumberDiv.style.backgroundColor = "lightgrey";
        randomNumberDiv.textContent = randomNumber;
        randomNumberDiv.style.textAlign = "center";
        randomNumberDiv.style.borderRadius = "4px";
        randomNumberDiv.style.margin = "2px";
        randomNumberDiv.style.padding = "6px";
    }
    divsInMain = main.querySelectorAll("main div")
}



createButton.addEventListener("click", function () {
    createDivs(gridInput.value);
    updateSum();
})

createDivs(95);




