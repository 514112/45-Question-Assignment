//Name Cases: Store a person’s name in a variable, and then print that person’s name in


//lowercase, uppercase,and titlecase.

 let Name = "Namal khan";

 console.log("Lower Case:",Name.toLowerCase());
 
 console.log("UpperCase:",Name.toUpperCase());

 console.log("titleCase:",Name.replace(/\bw/g,c => c.toUpperCase()));
 
