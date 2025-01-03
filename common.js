



//Få ut ett nummber mellan 0-99, 99 gånger.
//Gör ett grid rutnät.
//
const createButton = document.getElementById("create");
const gridInput = document.getElementById("grid");
const main = document.createElement("main");
document.body.appendChild(main);
let randomNumberArray = [];



createButton.addEventListener("click", function () {
    main.innerHTML = " ";
    for (let i = 0; i < gridInput.value; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        randomNumberArray.push(randomNumber);
        const randomNumberDiv = document.createElement("div");
        main.appendChild(randomNumberDiv);
        randomNumberDiv.style.backgroundColor = "lightgrey";
        randomNumberDiv.textContent = randomNumber;
        randomNumberDiv.style.textAlign = "center";
        randomNumberDiv.style.borderRadius = "4px";
        randomNumberDiv.style.margin = "2px";
        randomNumberDiv.style.padding = "6px";
    }
})


