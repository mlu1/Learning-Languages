/**
 * Questions 
 */

const products =[
    {productName:'laptop',id:1,price:1200},
    {productName:'smartphone',id:2,price:600},
    {productName:'HeadPhones',id:3,price:200},
    {productName:'Home Speakers',id:4,price:400}
]

/** 
 * Q1 : Fetch all products
 */
for (let product of products){
    console.log(product.id,':',product.productName)
}

/** 
 * Q2 : Fetch all product id with price > 500
 */

for (let product of products){
    if(product.price > 500){
        console.log(product.productName,':',product.price)
    }
}

/**
 * Nested destructuring
 */
const [{productName},,{price},{id}] = products

console.log(productName)
console.log(price)
console.log(id)



/** 
 * Q3 : Increase by 10% for all products
 */
const increasePrice = 0.1;

for(let product of products){
    product.price = product.price * (1+increasePrice)
    product.price = product.price.toFixed(2)
}

console.log(products)