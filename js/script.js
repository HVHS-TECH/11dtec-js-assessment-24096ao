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
const ITEM_LIST = document.getElementById("itemList");
const RECEIPT_OUTPUT = document.getElementById("receiptOutput");

const TITLE = document.getElementById("title");
TITLE.innerHTML = "Menu";

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

/***************food*******************/
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

/*****************drinks*****************/
let espresso = {
    name: "espresso",
    price: 2
};
let doubleEspresso = {
    name: "doubleEspresso",
    price: 2
};
let macchiato = {
    name: "macchiato",
    price: 2
};
let ristretto =  {
    name: "ristretto",
    price: 2
};
let longBlack = {
    name: "longBlack",
    price: 2
};
let caffeLatte = {
    name: "caffeLatte",
    price: 2
};
let cappuccino = {
    name: "cappuccino",
    price: 2
};
let flatWhite = {
    name: "flatWhite",
    price: 2
};
let iceCoffee = {
    name: "iceCoffee",
    price: 4
};
let hotChocolate = {
    name: "hotChocolate",
    price: 2
};
let berrySmoothie = {
    name: "berrySmoothie",
    price: 2
};
let feijoaSmoothie = {
    name: "feijoaSmoothie",
    price: 3.50
};
let water = {
    name: "feijoaSmoothie",
    price: 1
};
let appleJuice = {
    name: "appleJuice",
    price: 1.50
};
let orangeJuice =  {
    name: "orangeJuice",
    price: 2.50
};

/****************************
Main code
****************************/


/****************************
functions
****************************/
/***********************************Add items*********************************/
function addedItem(_product, _price) {

    totalPrice = totalPrice + _price;
    SHOPPING_LIST.push(" "+_product);
    
    console.log(" ");
    console.log("you added " + _product);
    console.log(_product + " costs: " + _price);
    console.log("the total price is " + totalPrice + " dollars");
    console.log("list: " + SHOPPING_LIST);
    
    OUTPUT.innerHTML += "<p>You added " +_product+" = $"+_price+"</p>";
    TOTAL.innerHTML = "<p>The total price is $"+totalPrice+"</p>";
    RECEIPT_OUTPUT.innerHTML = "<p>The total price is " +totalPrice+"</p>";
    ITEM_LIST.innerHTML += "<p>" +_product+" = $"+_price+"</p>";
}

/***********************************remove items*********************************/
function removeItem(_product, _price) {
    if (SHOPPING_LIST.length < 1 || totalPrice < 0) {
        OUTPUT.innerHTML += "<p>You do not have any items to remove</p>";
        ITEM_LIST.innerHTML = "<p>You do not have any items to remove</p>";
        return;
    }
    
    SHOPPING_LIST.splice(_product, 1);
    totalPrice = totalPrice - _price;

    console.log(" ");
    console.log("you removed " + _product);
    console.log(_product + " costs: " + _price);
    console.log("the total price is now $" + totalPrice + " dollars");
    console.log("list: " + SHOPPING_LIST);

    OUTPUT.innerHTML += "<p>You have removed 1 " +_product+"</p>";
    ITEM_LIST.innerHTML += "<p>You removed 1 " +_product+"</p>";
}

/***********************************order*********************************/
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
    RECEIPT_OUTPUT.innerHTML += "<p> The total price is $"+totalPrice+"</p>";
    RECEIPT_OUTPUT.innerHTML += "<p>Your change is " +change+ "</p>";
}

/**********************nav****************************/
/******************show cart************/
function showCart() {
    //Show cart
    console.log("hide menu");
    menu.style.display="none";
    cart.style.display="block";
    receipt.style.display="none";
    TITLE.innerHTML = "Cart";
}

/**************show menu***********/
function showMenu() {
    //show menu
    console.log("hide cart");
    menu.style.display="block";
    cart.style.display="none";
    receipt.style.display="none";
    TITLE.innerHTML = "Menu";
}

/**********show receipt********/
function showReceipt() {
    //show receipt
    menu.style.display = "none";
    cart.style.display = "none";
    receipt.style.display = "block";
    TITLE.innerHTML = "Receipt";
}

/****************************
end of code
****************************/

