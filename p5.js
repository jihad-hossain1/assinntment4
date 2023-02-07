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


