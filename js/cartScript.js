/****************************
cartScript.js
****************************/
console.log("Running cartScript.js")


// variables
const OUTPUT = document.getElementById("itemInfo");
const USER_NAME_FIELD = document.getElementById("userNameField");
const USER_MONEY_FIELD = document.getElementById("userMoneyField");

let totalPrice = 0;

let productList = [ ];
/****************************
Main code
****************************/


/****************************
functions
****************************/
function addedItem(_product, _price) {

    totalPrice = totalPrice + _price;
    productList.push(" "+_product);
    
    console.log("you added " + _product);
    console.log(_product + " costs: " + _price);
    console.log("the total price is " + totalPrice + " dollars");
    console.log("list: " + productList);
}

function addQuantity() {

}


/****************************
end of code
****************************/

