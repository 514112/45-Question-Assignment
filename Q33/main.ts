let numbers = [1,2,3,4,5,6,7,8,9]
for(let oneNumber of numbers){
    let ordinalEnding: string;
    if(oneNumber === 1){
        ordinalEnding = "st"
    }else if(oneNumber === 2){
        ordinalEnding ="nd"
    }else if(oneNumber === 3){
        ordinalEnding = "rd"
    }else if (oneNumber === 4){
        ordinalEnding = "th"
    }else if(oneNumber === 5){
        ordinalEnding = "th"
    }else if(oneNumber === 6){
        ordinalEnding = "th"
    }else if(oneNumber === 7){
        ordinalEnding = "th"
    }else if(oneNumber === 8){
        ordinalEnding = "th"
    }else (oneNumber === 9){
        ordinalEnding = "th"
    }
    console.log(`${oneNumber}${ordinalEnding}`); 
}
