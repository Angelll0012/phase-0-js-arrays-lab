// Write your code here

// Initialize the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function 1: Log the first product in the array
function logFirstProduct() {
    console.log(products[0]);
}

// Function 2: Add a new product to the end of the array
function addProduct(productName) {
    products.push(productName);
}

//function 3:??

// Function 4: Remove the last product from the array
function removeLastProduct() {
    products.pop();
}




// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
