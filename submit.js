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
/* Function Discription: 
This is a Arithmetic operators function. 
it's perform arithmetic on numbers (literals or variables).
*/



// problem 2
function evenOdd(myString){
    if(typeof myString != 'string'){
        return 'provide a valid input'
    }
    if(myString.length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }    
}
/* Function Discription: 
This function are Conditional Statements .
The if & else statement executes a statement if a specified condition is truthy. 
If the condition is falsy, another statement in the optional else clause will be executed . 
*/



// problem  3
function isLGSeven(myNumber){
    if(typeof myNumber != 'number'){
        return 'provide a valid input'
    }
    let sum = myNumber - 7;
    if(sum < 7){
        return sum;
    }
    else if(sum > 7){
        return myNumber * 2;
    }    
}
/* Function Discription: 
This function are Conditional Statements .
Use the else if statement to specify a new condition if the first condition is false.
*/


// problem  4
function findingBadData(numbers){
    if(typeof numbers != 'number'){
        return 'provide a valid input'
    }
    let count = 0;

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < 0){
            count = count + 1;
        }
        
    }
    return count;
}
/* Function Discription: 
This is a loop function . combindly use Conditional Statement.
And this function used for finding data from an array . 
An array can hold many values under a single name, and we can access the values by referring to an index number.
*/


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
/* Function Discription:
This function are used to some Arrithmetic operators & Conditional Statement . 
*/ 