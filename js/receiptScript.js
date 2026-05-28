/****************************
recieptScript.js
****************************/
console.log("Running recieptScript.js");

const USER_NAME_FIELD = document.getElementById("userNameField");
const USER_MONEY_FIELD = document.getElementById("userMoneyField");

/******user*******/
let user = {
    name: String(USER_NAME_FIELD.value),
    money: Number(USER_MONEY_FIELD.value)
};

/****************************
Main code
****************************/


/****************************
functions
****************************/
function order() {
    console.log("the total price is " + totalPrice);
    console.log("Your name is " +user.name);
    console.log("you have entered " + user.money);
    console.log("you will have ", user.money - totalPrice, "dollars are change");
}

if (user.money < totalPrice) {
    console.log("You have not entered enough money");
}


/****************************
end of code
****************************/

