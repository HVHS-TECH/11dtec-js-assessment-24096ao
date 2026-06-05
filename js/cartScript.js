/****************************
cartScript.js
****************************/
console.log("Running cartScript.js");

// variables
const ADD_ITEM_HTML = document.getElementById("itemInfo");

let totalPrice = 0;

const SHOPPING_LIST = [ ];

console.log(SHOPPING_LIST);

sessionStorage.setItem(SHOPPING_LIST, totalPrice);
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

    ADD_ITEM_HTML.innerHTML += "<p>"+_product+" was added, cost: "+_price+ " the total cost: "+totalPrice+"</p>";
}


/****************************
end of code
****************************/

