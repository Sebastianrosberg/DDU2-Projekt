const findButton = document.getElementById("findButton");
const valueOfTwoCells = document.getElementById("sumOfTwoCells")
valueOfTwoCells.value = `179`

findButton.addEventListener("click", function () {
    let foundMatch = false
    for (let i = 0; i < divsInMain.length; i++) {
        for (let j = i + 1; j < divsInMain.length; j++) {

            let firstTerm = Number(divsInMain[i].textContent)
            let secondTerm = Number(divsInMain[j].textContent)

            if (firstTerm + secondTerm == Number(valueOfTwoCells.value)) {
                divsInMain[i].style.backgroundColor = "lightgreen"
                divsInMain[j].style.backgroundColor = "lightgreen"
                foundMatch = true;
                break;
            }
        }
        if (foundMatch) {
            break
        }
    }
})