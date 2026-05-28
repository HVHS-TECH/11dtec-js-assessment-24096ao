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

let change = 0;
    change = totalPrice - user.money;

shortenAll = user.name.trim() && user.money.trim();
lowerCaseAll = user.name.toLowerCase();
/****************************
Main code
****************************/


/****************************
functions
****************************/
if (USER_NAME_FIELD.checkValidity() === false && USER_NAME_FIELD.value != String && USER_MONEY_FIELD.checkValidity() === false && USER_MONEY_FIELD.value != Number) {
    
} 

function order() {
    console.log("the total price is " + totalPrice);
    console.log("Your name is " +user.name);
    console.log("you have entered " + user.money);
    console.log("you will have " + change + " dollars in change");
}

if (user.money > totalPrice || user.money < 0) {
    console.log("You have not entered enough money");
    change = 0;
}


/****************************
end of code
****************************/

