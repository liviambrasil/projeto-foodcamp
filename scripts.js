let foodcost=0;
let drinkcost=0;
let dessertcost=0;
var foodname;
var drinkname;
var dessertname;

function selectfood(foodselected) {

    const foodmenu = document.querySelector(".foodrow");
    const selectedfood = document.querySelector(".selectedfood");
    const icon = foodmenu.querySelector(".show");
    const selector = "." + "dish" + foodselected;
    const selectoricon = "." + "icon" + foodselected;
    const button = document.querySelector(selector);
    const buttonicon = document.querySelector(selectoricon);
    

    if (selectedfood !== null) {
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

    const drinkmenu = document.querySelector(".drinkrow");
    const selecteddrink = document.querySelector(".selecteddrink");
    const icon = drinkmenu.querySelector(".show");
    const selector = "." + "drink" + drinkselected;
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

function selectdessert(dessertselected) {

    const dessertmenu = document.querySelector(".dessertrow");
    const selecteddessert = document.querySelector(".selecteddessert");
    const icon = dessertmenu.querySelector(".show");
    const selector = "." + "dessert" + dessertselected;
    const selectoricon = "." + "icon" + dessertselected;
    const button = document.querySelector(selector);
    const buttonicon = document.querySelector(selectoricon);
    

    if (selecteddessert !== null) {
    console.log("vou remover o selecionado");
    selecteddessert.classList.remove('selecteddessert');
    icon.classList.remove('show');
    }

    dessertcost = parseFloat(document.getElementById("dessertcost"+dessertselected).innerText);
    dessertname = document.getElementById("dessertname"+dessertselected).innerText;

    button.classList.add('selecteddessert');
    buttonicon.classList.add('show');

    checkout ();
}

function checkout (){
    if(foodcost!==0 && drinkcost!==0 && dessertcost!==0){
        const buttonCheckout = document.querySelector(".button-checkout");
        buttonCheckout.classList.add('button-checkout-on');
        document.getElementById("text").innerHTML="Fechar pedido";
        buttonCheckout.disabled = false;
    }
}

function checkoutmessage (){
    const cost = foodcost + drinkcost + dessertcost;
    const message = encodeURIComponent("Olá, gostaria de fazer o pedido:" + "\n" + "- Prato: " + foodname + "\n" + "- Bebida: " + drinkname + "\n" + "- Sobremesa: " + dessertname + "\n" + "Total: R$ " + cost.toFixed(2));
    const url = "https://wa.me/5521994288121?text=" + message;
    window.open(url);
}