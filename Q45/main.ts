

/*function car_brand(manufacturer, model, ...options){
    let car = {
        manufacturer : manufacturer,
        model : model
    }
    options.forEach(option => {
    let [Key,value] = option.split(":")
    car [Key.trim()] = value.trim()
});

return car;

let my_car = car_brand ("Toyota","Corolla","Color:White","Sunroof:true")
console.log(my_car);

}

/*
function car_create(manufacturer, model, ...options){
    let car = {
        manufacturer : manufacturer,
        model : model
    }
    options.forEach(option =>{
        let [key,value] = option.split(":")
        car [key.trim()] =value.trim()
});
return car;
} 
let my_car = car_create ("Toyota","Corolla","Color:White","Sunroof:true")
*/


function car_brand(manufacturer, model, options?){
    let car = {
        manufacturer: manufacturer,
        model: model,
    }
    
    options.forEach(option => {
        let [key, value] = option.split(":")
        car [key.trim()] = value.trim()
    })

    return car;
};

let my_car = car_brand("Toyota", "Corolla", "Color:White", "Sunroof:true");
console.log(my_car);
