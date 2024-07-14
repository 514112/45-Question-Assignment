/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

 */

let favourite_fruits :string[] = ["PineApple","Strawberry","Mango"];
if(favourite_fruits.includes("PineApple")){
    console.log("You really like PineApple!");
}

if(favourite_fruits.includes("Strawberry")){
    console.log("You are really like Strawberry!");
}

if(favourite_fruits.includes("Kiwi")){
    console.log("You are really like Kiwi!");
}
if(favourite_fruits.includes("Mango")){
    console.log("You are really like Mango!");
}

if(favourite_fruits.includes("Apple")){
    console.log("You are really like Apple!");   
}

if(favourite_fruits.includes("Guava")){
    console.log("You are really like Guava!");
    
}