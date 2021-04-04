function selectoption(classoption) {
    const optionSelected = document.querySelector(".selected");
    if (optionSelected !== null) {
        optionSelected.classList.remove("selected");
    }
    const newOptionSelected = document.querySelector("."+ classoption);
    newOptionSelected.classList.add("selected");
}