

// let arr = ['c', 'e', 'f', 'g', ['a', 'd', 'z']]


// let flatArr = arr.flat()
// flatArr = flatArr.sort()
// console.log(flatArr)



function findHighest(flatArr){
    let highest = flatArr[0]
    for(let i = 1; i < flatArr.length; i++){
        if(flatArr[i] > highest){
            highest = flatArr[i]
        }
    }
    return highest;
}

function findLowest(flatArr){
    let lowest = flatArr[0]
    for(let i = flatArr.length-1; i>0; i--){
        if(flatArr[i] < lowest){
            lowest = flatArr[i]
        }
    }
    return lowest
}


function findSecondLowest(flatArr){
    let lowest = findLowest(flatArr)
    let secondLowest = flatArr[1]
    for(let i = 1; i < flatArr.length; i++){
        if(flatArr[i] < secondLowest && flatArr[i] > lowest){
            secondLowest = flatArr[i]
        }
    }
    return secondLowest;
}

function findSecondHighest(flatArr){
    let highest = findHighest(flatArr)
    let secondHighest = flatArr[0];
    for(let i = flatArr.length-1; i>0; i--){
        if(flatArr[i] > secondHighest && flatArr[i] < highest){
            secondHighest = flatArr[i]
        }
    }
    return secondHighest;
}

function findThirdHighest(flatArr){
    let highest = findHighest(flatArr)
    let thirdHighest = flatArr[1]
    for(let i = 1; i < flatArr.length; i++){
        if(flatArr[i] > thirdHighest && flatArr[i] < highest){
            thirdHighest = flatArr[i]
        }
    }
    return thirdHighest;
}
function findThirdHighest(){
    let secondHighest = findSecondHighest(flatArr)
    let thirdHighest = flatArr[2]
    for(let i = 1; i < flatArr.length; i++){
        if(flatArr[i] > thirdHighest && flatArr[i] < secondHighest){
            thirdHighest = flatArr[i]
        }
    }
    return thirdHighest;
}

console.log(findHighest(flatArr))

console.log(findLowest(flatArr))

console.log(findSecondLowest(flatArr))

console.log(findSecondHighest(flatArr))

console.log(findThirdHighest(flatArr))


