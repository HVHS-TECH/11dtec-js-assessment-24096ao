/****************************
script.js
****************************/
console.log("Running script.js");

/***************const*************/
//shopping list
const SHOPPING_LIST = [ ];

//fields
const USER_NAME = document.getElementById("userNameField");
const USER_MONEY = document.getElementById("userMoneyField");

//innerhtml
const OUTPUT = document.getElementById("items");
//total is in cart
const TOTAL = document.getElementById("total");
const ITEM_LIST = document.getElementById("itemList");
const RECEIPT_OUTPUT = document.getElementById("receiptOutput");
const RECEIPT_FORM = document.getElementById("receiptForm");

//title
const TITLE = document.getElementById("title");
//auto show title home
TITLE.innerHTML = "home";


/***************let*************/

//nav btns
let showCartBtn = document.getElementById("showCartBtn");
let showMenuBtn = document.getElementById("showMenuBtn");
let showHomeBtn = document.getElementById("showHomeBtn");

//auto hide home btn
showHomeBtn.style.display = "none";

//nav
let menu = document.getElementById("menu");
let cart = document.getElementById("cart");
let receipt = document.getElementById("receipt");
let home = document.getElementById("home");

//total
let totalPrice = 0;

//user money
let userMoney = Number(USER_MONEY.value);

//user name
let userName = String(USER_NAME.value);


/***************food*************/
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

/***************drinks*************/
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
functions
****************************/
/******************************************************Add items***************************************************/
//when clicked adds item to array + price
function addedItem(_product, _price) {
    //alerts user
    alert("Added "+_product+" for $" +_price);

    //adds price & product to list
    SHOPPING_LIST.push(" "+_product);
    totalPrice = totalPrice + _price;
    
    //console log
    console.log(" ");
    console.log("you added " + _product);
    console.log(_product + " costs: " + _price);
    console.log("the total price is " + totalPrice + " dollars");
    console.log("list: " + SHOPPING_LIST);
    

    OUTPUT.innerHTML += "<p>You added " +_product+" = $"+_price+"</p>";
    //total is in cart
    TOTAL.innerHTML = "<p>The total price is $"+totalPrice+"</p>";
    RECEIPT_OUTPUT.innerHTML = "<p>The total price is " +totalPrice+"</p>";
    ITEM_LIST.innerHTML += "<p>" +_product+" = $"+_price+"</p>";

}


/******************************************************remove items***************************************************/
//when clicked romoves item & price
function removeItem(_product, _price) {
    //will make sure price doesnt go below 0 & warns user no more items to remove
    if (SHOPPING_LIST.length <= 1 || totalPrice <= 0 ) {
        //alerts user
        alert("You can not romove any more of this item");
        
        OUTPUT.innerHTML = "<p>You do not have any items to remove</p>";
        ITEM_LIST.innerHTML = "<p>You do not have any items to remove</p>";
        //total is in cart
        TOTAL.innerHTML = "<p>The total price is now $0</p>";

        return;
    }
    
    //alerts user
    alert("removed "+_product);

    //removes product & price
    SHOPPING_LIST.splice(_product);
    totalPrice = totalPrice - _price;

    //console log
    console.log(" ");
    console.log("you removed " + _product);
    console.log(_product + " costs: " + _price);
    console.log("the total price is now $" + totalPrice + " dollars");
    console.log("list: " + SHOPPING_LIST);


    OUTPUT.innerHTML += "<p>You have removed 1 " +_product+"</p>";
    ITEM_LIST.innerHTML += "<p>You removed 1 " +_product+"</p>";
    RECEIPT_OUTPUT.innerHTML = "<p>The total price is " +totalPrice+"</p>";
    //total is in cart
    TOTAL.innerHTML = "<p>The total price is now "+totalPrice+"</p>";
}


/******************************************************order***************************************************/
//Calculates change and makes sure receipt is correct
function order() {
    //change
    let change = userMoney - totalPrice;

    //makes sure user entered enough money
    if (userMoney < totalPrice-1 || userMoney < 0 || change <= -1) {
        console.log("You havent payed enough!");
        RECEIPT_OUTPUT.innerHTML = "<p>You havent payed enough!</p>";
        return; 
    }

    if (SHOPPING_LIST.length >= 11) {
        console.log("You have ordered too much!");
        RECEIPT_OUTPUT.innerHTML = "<p>You have ordered too much!</p>";
        RECEIPT_OUTPUT.innerHTML = "<p>Please romove some items</p>";
        return; 
    }

    if (userMoney >= 301) {
        console.log("You have payed too much!");
        RECEIPT_OUTPUT.innerHTML = "<p>You have payed too much!</p>";
        return; 
    }

    //makes sure user entered form
    if (RECEIPT_FORM.checkValidity() == false || USER_NAME.value != String || USER_MONEY != Number) {
        RECEIPT_OUTPUT.innerHTML = "<p>Please fill in the form correctly</p>";
        return; 
    }

    //makes sure user has ordered anything
    if (SHOPPING_LIST.length < 1) {
        RECEIPT_OUTPUT.innerHTML = "<p>you havent ordered anything</p>";
        return;
    }

    console.log(userMoney, change, totalPrice);
    console.log("Order placed");
    console.log("you ordered "+SHOPPING_LIST);
    console.log("The total is "+totalPrice);
    console.log("your change is " +change);

    //put out receipt
    RECEIPT_OUTPUT.innerHTML += "<p>Thanks "+userName+", your order has been placed</p>";
    RECEIPT_OUTPUT.innerHTML += "<p>You ordered " +SHOPPING_LIST+ "</p>";
    RECEIPT_OUTPUT.innerHTML += "<p> The total price is $"+totalPrice+"</p>";
    RECEIPT_OUTPUT.innerHTML += "<p>Your change is $" +change+ "</p>";
}


/******************************************************nav***************************************************/

/******************show home************/
function showHome() {
    console.log("Show cart");
    
    //hides all but home page
    menu.style.display = "none";
    cart.style.display = " none";
    receipt.style.display = "none";
    home.style.display = "block";
    
    //changes title
    TITLE.innerHTML = "Home page";

    //nav buttons
    showCartBtn.style.display = "block";
    showMenuBtn.style.display = "block";
    showHomeBtn.style.display = "none";    
}

/******************show cart************/
function showCart() {
    console.log("Show cart");

    //hides all but cart
    menu.style.display = "none";
    cart.style.display = "block";
    receipt.style.display = "none";
    home.style.display = "none";

    //changes title
    TITLE.innerHTML = "Your cart";

    //nav buttons
    showCartBtn.style.display = "none";
    showMenuBtn.style.display = "block";
    showHomeBtn.style.display = "block";    
}

/**************show menu***********/
function showMenu() {
    console.log("Show Menu");

    //hides all but menu
    menu.style.display = "block";
    cart.style.display = "none";
    receipt.style.display = "none";
    home.style.display = "none";

    //changes title
    TITLE.innerHTML = "Menu";

    //nav buttons
    showCartBtn.style.display = "block";
    showMenuBtn.style.display = "none";
    showHomeBtn.style.display = "block";    
}

/**********show receipt********/
function showReceipt() {
    console.log("Show receipt");

    //hides all but receipt
    menu.style.display = "none";
    cart.style.display = "none";
    receipt.style.display = "block";
    home.style.display = "none";

    //changes title
    TITLE.innerHTML = "Receipt";

    //nav buttons
    showCartBtn.style.display = "block";
    showMenuBtn.style.display = "block";
    showHomeBtn.style.display = "block";    
}

/****************************
end of code
****************************/