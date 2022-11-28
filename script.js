/* This functions adds eventListeners to every lifepath choice button. */
function selectButton() {
    const blackhat = document.querySelector("#blackhat > button");
    const whitehat = document.querySelector("#whitehat > button");
    const vigilante = document.querySelector("#vigilante > button");

    blackhat.addEventListener("click", addButtonStyling);
    whitehat.addEventListener("click", addButtonStyling);
    vigilante.addEventListener("click", addButtonStyling);
}

/*  This function removes "selected" styling from all lifepath choice buttons.
    This ensured that only one button is selected at a time. */
function removeActiveButtons() {
    const blackhat = document.querySelector("#blackhat > button");
    const whitehat = document.querySelector("#whitehat > button");
    const vigilante = document.querySelector("#vigilante > button");

    blackhat.classList.remove("selected");
    whitehat.classList.remove("selected");
    vigilante.classList.remove("selected");
}

/*  This function adds the "selected" styling to the currently selected lifepath
    choice button. */
function addButtonStyling(e) {
    removeActiveButtons();

    this.classList.add("selected");
}

selectButton()