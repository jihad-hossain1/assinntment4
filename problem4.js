// problem 4
function findingBadData(numbers){
    let count = 0;

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < 0){
            count = count + 1;
        }
        
    }
    return count;
}

// let finalResult = findingBadData([1, 2, 5, 5, 66, -53]);
// console.log(finalResult);


