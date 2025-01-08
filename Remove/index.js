const addButton = document.getElementById("newRandomNumber");
const addInput = document.getElementById("addInput")
const removeButton = document.getElementById("remove");
const removeInput = document.getElementById("removeInput")

addInput.value = `-`
removeInput.value = `-`


randomInput = 0;
addButton.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 100);
    addInput.value = randomNumber;
    randomInput = randomNumber;
    for (let i = 0; i < divsInMain.length; i++) {
        if (divsInMain[i].style.backgroundColor == "orange") {
            divsInMain[i].style.backgroundColor = "lightgrey"
        }
        if (divsInMain[i].textContent == randomInput) {
            divsInMain[i].style.backgroundColor = "orange";
        }
    }
    return randomInput
})

removeButton.addEventListener("click", function () {
    numCounter = 0;
    isFound = false;
    for (let i = 0; i < divsInMain.length; i++) {
        if (divsInMain[i].textContent == randomInput) {
            divsInMain[i].style.backgroundColor = "red"
            divsInMain[i].textContent = "X"
            numCounter++


            isFound = true;
        }
        removeInput.value = `${randomInput} removed ${numCounter} times`
    }
    if (isFound == false) {
        removeInput.value = `Not Found`
    }

})

main.addEventListener("mouseover", function (event) {
    if (event.target.style.backgroundColor == "orange") {
        event.target.style.backgroundColor = "moccasin"
    }
    if (event.target.style.backgroundColor == "lightgrey") {
        event.target.style.backgroundColor = "moccasin"
    }
    if (event.target.style.backgroundColor == "red") {
        event.target.style.backgroundColor == "lightpink"
    }
})

main.addEventListener("mouseout", function (event) {
    if (event.target.style.backgroundColor == "moccasin") {
        event.target.style.backgroundColor = "lightgrey"
    }
    if (event.target.style.backgroundColor == "moccasin") {
        event.target.style.backgroundColor == "orange"
    }
})

main.addEventListener("mouseout", function (event) {
    console.log("red")
    if (event.target.style.backgroundColor == "lightpink") {
        event.target.style.backgroundColor == "red"
    }
})
