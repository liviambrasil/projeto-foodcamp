function selectfood(foodselected) {

    // tirar verde de quem ta verde //
    console.log("entrei na função");
    const selectedfood = document.querySelector(".selectedfood");

    if (selectedfood !== null) {
    console.log("vou remover o selecionado")
    selectedfood.classList.remove('selectedfood');
    }

    // botar verde em quem foi clicado //
    const selector = "." + foodselected;
    const button = document.querySelector(selector);
    console.log("adicionei selecionado no clicado")

    button.classList.add('selectedfood');
}

function selectdrink(drinkselected) {

    // tirar verde de quem ta verde //
    console.log("entrei na função");
    const selecteddrink = document.querySelector(".selecteddrink");

    if (selecteddrink !== null) {
    console.log("vou remover o selecionado")
    selecteddrink.classList.remove('selecteddrink');
    }

    // botar verde em quem foi clicado //
    const selector = "." + drinkselected;
    const button = document.querySelector(selector);
    console.log("adicionei selecionado no clicado")

    button.classList.add('selecteddrink');
}

function selectdessert(dessertselected) {

    // tirar verde de quem ta verde //
    console.log("entrei na função");
    const selecteddessert = document.querySelector(".selecteddessert");

    if (selecteddessert !== null) {
    console.log("vou remover o selecionado")
    selecteddessert.classList.remove('selecteddessert');
    }

    // botar verde em quem foi clicado //
    const selector = "." + dessertselected;
    const button = document.querySelector(selector);
    console.log("adicionei selecionado no clicado")

    button.classList.add('selecteddessert');
}