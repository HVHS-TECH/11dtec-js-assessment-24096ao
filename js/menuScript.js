/****************************
menuScript.js
****************************/
console.log("Running menuScript.js");

let totalPrice = 0;

const SHOPPING_LIST = [ ];

let document.getElementById("cart").style.visability = "visable";
let document.getElementById("menu").style.visability = "hidden";

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
    document.getElementById("cart").style.visability = "visable";
    document.getElementById("menu").style.visability = "hidden";
}

function hideCart() {
    //hide cart
    cart.style = "none";
    menu.style = " ";
}

function receipt() {
    //hide all and show receipt
}

/****************************
end of code
****************************/

