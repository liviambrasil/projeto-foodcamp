let foodcost=0;
let drinkcost=1;
let dessertcost=2;
var foodname;
var drinkname;
var dessertname;

function selectfood(foodselected) {

    const selectedfood = document.querySelector(".selectedfood");
    const icon = document.querySelector(".show");
    const selector = "." + "dish" + foodselected;
    const selectoricon = "." + "icon" + foodselected;
    const button = document.querySelector(selector);
    const buttonicon = document.querySelector(selectoricon);
    

    if (selectedfood !== null) {
    console.log("vou remover o selecionado");
    selectedfood.classList.remove('selectedfood');
    icon.classList.remove('show');
    }

    foodcost = parseFloat(document.getElementById("foodcost"+foodselected).innerText);
    foodname = document.getElementById("foodname"+foodselected).innerText;

    button.classList.add('selectedfood');
    buttonicon.classList.add('show');

    checkout ();
}

function selectdrink(drinkselected) {

    const selecteddrink = document.querySelector(".selecteddrink");
    const icon = document.querySelector(".show");
    const selector = "." + "dish" + drinkselected;
    const selectoricon = "." + "icon" + drinkselected;
    const button = document.querySelector(selector);
    const buttonicon = document.querySelector(selectoricon);
    

    if (selecteddrink !== null) {
    console.log("vou remover o selecionado");
    selecteddrink.classList.remove('selecteddrink');
    icon.classList.remove('show');
    }

    drinkcost = parseFloat(document.getElementById("drinkcost"+drinkselected).innerText);
    drinkname = document.getElementById("drinkname"+drinkselected).innerText;

    button.classList.add('selecteddrink');
    buttonicon.classList.add('show');

    checkout ();
}

function checkout (){
    if(foodcost!==0 && drinkcost!==0 && dessertcost!==0){
        const buttonCheckout = document.querySelector(".button-checkout");
        buttonCheckout.classList.add('button-checkout-on');
    }
}
