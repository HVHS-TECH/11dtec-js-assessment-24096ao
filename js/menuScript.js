/****************************
menuScript.js
****************************/
console.log("Running menuScript.js");

let totalPrice = 0;

const SHOPPING_LIST = [ ];

let menu = document.getElementById("menu").style.display;
let cart = document.getElementById("cart").style.display;
let receipt = document.getElementById("receipt").style.display;

/******food************/
let EnglishBreakfast = {
    name: "english breakfast",
    price: 20
};
let waffle = {
    name: "Waffle",
    price: 13
};
let pancake = {
    name: "Pancake",
    price: 13
};
let bagle = {
    name: "bagle",
    price: 15
};
let sandwich = {
    name: "sandwich",
    price: 10
};

/******drinks************/
let espresso = 2;
let doubleEspresso = 2;
let macchiato = 2;
let ristretto = 2;
let longBlack = 2;
let caffèLatte = 2;
let cappuccino = 2;
let flatWhite = 2;
let iceCoffee = 2;
let hotChocolate = 1.50;
let berrySmoothie = 3;
let feijoaSmoothie = 3.50;
let water = 1;
let appleJuice = 2;
let orangeJuice = 2.30;

/****************************
Main code
****************************/



/****************************
functions
****************************/
function addedItem(_product, _price) {

    totalPrice = totalPrice + _price;
    SHOPPING_LIST.push(" "+_product);
    
    console.log(" ");
    console.log("you added " + _product);
    console.log(_product + " costs: " + _price);
    console.log("the total price is " + totalPrice + " dollars");
    console.log("list: " + SHOPPING_LIST);
}

function hideMenu() {
    //hide menu
    console.log("hide menu");
    menu.object.style.display="none";
    cart.object.style.display="block";
    receipt.object.style.display="none";
}

function hideCart() {
    //hide cart
    console.log("hide cart");
    menu.object.style.display="block";
    cart.object.style.display="none";
    receipt.object.style.display="none";
}

function showReceipt() {
    //hide all and show receipt
    menu.style.display = 'none';
    cart.style.display='none';
    receipt.style.display='block';
}

/****************************
end of code
****************************/

