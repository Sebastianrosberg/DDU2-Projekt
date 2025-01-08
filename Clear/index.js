const clearButton = document.getElementById("clear")




main.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("numberDivs"))

        if (event.target.style.backgroundColor == "lightgrey") {
            event.target.style.backgroundColor = "lightblue"
        }
})

main.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("numberDivs"))

        if (event.target.style.backgroundColor == "lightblue") {
            event.target.style.backgroundColor = "lightgrey"
        }
})


main.addEventListener("click", function (event) {
    if (event.target.classList.contains("numberDivs"))

        if (event.target.style.backgroundColor == "lightblue") {
            event.target.style.backgroundColor = "orange"
            event.target.textContent = " "
        } else if (event.target.style.backgroundColor == "orange") {
            event.target.style.backgroundColor = "lightblue"
            let ranNum = Math.floor(Math.random() * 100);
            event.target.textContent = ranNum;
        }
})

main.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("numberDivs"))

        if (event.target.style.backgroundColor == "orange") {
            event.target.style.backgroundColor = "red"
        }
})

main.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("numberDivs"))

        if (event.target.style.backgroundColor == "red") {
            event.target.style.backgroundColor = "orange"
        }
})



clearButton.addEventListener("click", function () {
    for (let divs of divsInMain) {
        if (divs.style.backgroundColor == "red" || divs.style.backgroundColor == "orange" || divs.style.backgroundColor == "lightblue") {
            let ranNum = Math.floor(Math.random() * 100);
            divs.style.backgroundColor = "lightgrey"
            divs.textContent = ranNum
        }
    }
})








