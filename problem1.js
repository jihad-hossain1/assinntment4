// problem 1
function mindGame(myNumber){
    if(typeof myNumber != 'number'){
        return 'provide a valid input'
    }
    let sum = myNumber * 3;
    sum = sum + 10;
    sum = sum / 2;
    sum = sum - 5 ;
    return sum;
}

let finalResult = mindGame('jsk');
console.log(finalResult);