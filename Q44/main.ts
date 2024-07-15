function makeSandwich(...items: string[]){
    console.log("Making a Sandwich with the following items");
    items.forEach(singleItem =>
        console.log(singleItem)
        
    )
    console.log("Lets Enjoy Your Sandwich!");   
}
makeSandwich("Bread","Butter")
makeSandwich("Mayo","Chicken","Egg")
makeSandwich("Bread","Butter","Egg","Mayo","Chicken","Cheese",)