/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name.*/

let friends : string[] = ["Namal","Aiman","Gulnaz"];
for (let friend of friends){
    console.log(`Hello $(friends),would you learn to typescript?`)
};
