
type car = {
    manufacturer: string,
    model: string,
    [key:string]:any;
};

function car_create(manufacturer: string,model:string, optional:Record<string,any>): car {
    return{
        manufacturer,
        model,
        ...optional
}};

const my_car: car = car_create("Toyota","Corolla",{Color: "White",Sunroof: "true",year: "2024"});
console.log(my_car);
