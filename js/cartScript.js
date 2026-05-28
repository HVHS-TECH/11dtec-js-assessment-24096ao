/****************************
cartScript.js
****************************/
console.log("Running cartScript.js")


// variables
const OUTPUT = document.getElementById("itemInfo");

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




/****************************
end of code
****************************/

