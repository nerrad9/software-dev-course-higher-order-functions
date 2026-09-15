/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/
function filterProducts(prods, call){
  return prods.filter(call)
}

avail = filterProducts(products, p => p.inStock)
console.log(avail)
cheap = filterProducts(products, p => p.price <= 500)
console.log(cheap)
console.log(filterProducts(filterProducts(products, p => p.price <= 500), p => p.inStock))
console.log(filterProducts(filterProducts(products, p => p.price <= 500), p => p.inStock))


/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/
const upNames = products.map(prod => {return prod.name.toUpperCase()})
console.log(upNames)



/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage as a whole number
- Returns a function that takes in a product object and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` with a parameter `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `forEach()` call to add a new property, `salePrice`, to each product object.
4. Print the array of products to verify the new property and value have been added to each product object.
*/
function applyDiscount(dis){
  return function(prod){return (prod.price * (1 - (dis/100)))}
}
const die = applyDiscount(-50)
newP = [...products]
newP.forEach(prod=>{prod.salePrice = die(prod)})
console.log(newP)

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/
total = products.reduce((acc,prod) => {
  if(prod.inStock){
    return acc + prod.price
  }return acc},0)
console.log(total)

a = products.reduce((acc,prod) => acc + (prod.price * prod.inStock), 0)
console.log(a)

