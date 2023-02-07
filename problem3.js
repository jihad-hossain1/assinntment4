// problem no 3
function isLGSeven(myNumber){
    let sum = myNumber - 7;
    if(sum < 7){
        return sum;
    }
    else if(sum > 7){
        return myNumber * 2;
    }    
}

// let finalResult = isLGSeven(-15);
// console.log(finalResult);