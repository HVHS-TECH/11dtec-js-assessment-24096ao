/****************************
menuScript.js
****************************/
console.log("Running menuScript.js");

const SHOPPING_LIST = [ ];

//fields
const USER_NAME = document.getElementById("userNameField");
const USER_MONEY = document.getElementById("userMoneyField");

//innerhtml
const OUTPUT = document.getElementById("items");
const TOTAL = document.getElementById("total");
const RECEIPT_OUTPUT = document.getElementById("receiptOutput");

//nav
let menu = document.getElementById("menu");
let cart = document.getElementById("cart");
let receipt = document.getElementById("receipt");

//total
let totalPrice = 0;

//user info
let userMoney = Number(USER_MONEY.value);
let userName = String(USER_NAME.value);

let change = userMoney-totalPrice;

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
let espresso = {
    name: "espresso",
    price: 2
};
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
    
    OUTPUT.innerHTML += "<p>" +_product+" = $"+_price+"</p>";
    TOTAL.innerHTML = "<p>The total price is $"+totalPrice+"</p>";
    RECEIPT_OUTPUT.innerHTML = "<p>The total price is " +totalPrice+"</p>";
}

function order() {
    if (userMoney < totalPrice || userMoney < 0 || change < -1) {
        console.log("You havent payed enough!");
        RECEIPT_OUTPUT.innerHTML = "<p>You haven't entered enough money!</p>";
        return; 
    }

    console.log(change, userMoney, totalPrice);
    console.log("Order placed");
    console.log("you ordered "+SHOPPING_LIST);
    console.log("The total is "+totalPrice);
    console.log("your change is " +change);

    RECEIPT_OUTPUT.innerHTML += "<p>Hello "+userName+"!</p>";
    RECEIPT_OUTPUT.innerHTML += "<p>You ordered " +SHOPPING_LIST+ "</p>";
    RECEIPT_OUTPUT.innerHTML += "<p> The total price is "+totalPrice+"</p>";
    RECEIPT_OUTPUT.innerHTML += "<p>Your change is " +change+ "</p>";
}

/**********************NAV****************************/
function showCart() {
    //Show cart
    console.log("hide menu");
    menu.style.display="none";
    cart.style.display="block";
    receipt.style.display="none";
}

function showMenu() {
    //show menu
    console.log("hide cart");
    menu.style.display="block";
    cart.style.display="none";
    receipt.style.display="none";
}

function showReceipt() {
    //show receipt
    menu.style.display="none";
    cart.style.display="none";
    receipt.style.display="block";
}

/****************************
end of code
****************************/

