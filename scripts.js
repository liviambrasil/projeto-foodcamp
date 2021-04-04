function selectoption(classoption) {
    const selected = document.querySelector("."+ classoption);
    if (selected !== null) {
        selected.classList.remove("selected");
    }
    selected.classList.toggle("selected");
}