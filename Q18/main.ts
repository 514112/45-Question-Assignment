/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/



// Print your array in its original order.

let myfavPlaces : string[] = ["Swat","Turkey","Maldives","Switzealand","Kashmir"];
console.log("Original Order:", myfavPlaces);

// Print your array in alphabetical order without modifying the actual list.

console.log("Alphabetical Order :",myfavPlaces.slice().sort());

// Show that your array is still in its original order by printing it.

console.log("Original Order After Sorting:", myfavPlaces);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order :",myfavPlaces.slice().sort().reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Original Order:", myfavPlaces);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Original Order:", myfavPlaces.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to Original Order:", myfavPlaces.reverse());
 
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Stored in Alphabetical Order :",myfavPlaces.slice().sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
console.log("Back to Stored in Reverse Alphabetical Order :",myfavPlaces.slice().sort().reverse());
