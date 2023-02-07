// problem 1
function mindGame(myNumber){
    let sum = myNumber * 3;
    sum = sum + 10;
    sum = sum / 2;
    sum = sum - 5 ;
    return sum;
}

// let finalResult = mindGame(50);
// console.log(finalResult);



// problem no 2
function evenOdd(myString){

    if(myString.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
    
}

// let finalResult = evenOdd('phero batch7');
// console.log(finalResult);


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


// problem 5
function gemsToDiamond(firstFriend, secondFrind, thirdFriend){
    const firstFriendGems = firstFriend * 21;
    const secondFrindGems = secondFrind * 32;
    const thirdFriendGems = thirdFriend * 43;

    let totalGems = firstFriendGems + secondFrindGems + thirdFriendGems;
    
    if(totalGems < 1000*2){
        return totalGems;
    }
    else if(totalGems >= 1000*2){
        totalGems = totalGems - 2000;
        return totalGems;
    } 

}

// let finalGemsResult = gemsToDiamond(20, 200, 50);
// console.log(finalGemsResult);