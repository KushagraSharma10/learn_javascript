// let arr = ['c', 'e', 'f', 'g', ['a', 'd', 'z']]

// let flatArr = arr.flat()
// flatArr = flatArr.sort()
// console.log(flatArr)

function findHighest(flatArr) {
  let highest = flatArr[0];
  for (let i = 1; i < flatArr.length; i++) {
    if (flatArr[i] > highest) {
      highest = flatArr[i];
    }
  }
  return highest;
}

function findLowest(flatArr) {
  let lowest = flatArr[0];
  for (let i = flatArr.length - 1; i > 0; i--) {
    if (flatArr[i] < lowest) {
      lowest = flatArr[i];
    }
  }
  return lowest;
}

function findSecondLowest(flatArr) {
  let lowest = findLowest(flatArr);
  let secondLowest = flatArr[1];
  for (let i = 1; i < flatArr.length; i++) {
    if (flatArr[i] < secondLowest && flatArr[i] > lowest) {
      secondLowest = flatArr[i];
    }
  }
  return secondLowest;
}

function findSecondHighest(flatArr) {
  let highest = findHighest(flatArr);
  let secondHighest = flatArr[0];
  for (let i = flatArr.length - 1; i > 0; i--) {
    if (flatArr[i] > secondHighest && flatArr[i] < highest) {
      secondHighest = flatArr[i];
    }
  }
  return secondHighest;
}

function findThirdHighest(flatArr) {
  let highest = findHighest(flatArr);
  let thirdHighest = flatArr[1];
  for (let i = 1; i < flatArr.length; i++) {
    if (flatArr[i] > thirdHighest && flatArr[i] < highest) {
      thirdHighest = flatArr[i];
    }
  }
  return thirdHighest;
}
function findThirdHighest() {
  let secondHighest = findSecondHighest(flatArr);
  let thirdHighest = flatArr[2];
  for (let i = 1; i < flatArr.length; i++) {
    if (flatArr[i] > thirdHighest && flatArr[i] < secondHighest) {
      thirdHighest = flatArr[i];
    }
  }
  return thirdHighest;
}

// console.log(findHighest(flatArr))

// console.log(findLowest(flatArr))

// console.log(findSecondLowest(flatArr))

// console.log(findSecondHighest(flatArr))

// console.log(findThirdHighest(flatArr))

// let arr1 = [1,2,3,4,5]
// let arr2 = [7,8,9,10]

// console.log(arr.slice(2,3)) // [3]
// console.log(arr.slice(2,-1)) // [3,4]
// console.log(arr.slice(-2,3))
// console.log(arr.slice(-2,0))

// console.log(arr1.concat(obj))

// console.log(arr2)
// console.log(arr1)

// var obj = {
//     0: 1,
//     1:2,
//     2:3,
//     3:4,
//     4:5,
//     length: 5,
//     [Symbol.isConcatSpreadable]: true,

// }

// console.log(obj)

// let arr1 = [3,2,1,4,5]
// let arr2 = [7,8,9,10]

// arr1.sort((Ni, Ci) =>{
//     console.log({Ni, Ci})
//     console.log(Ni -Ci)
//     return Ni - Ci;
// })

// console.log(arr1)

// let findNow = function(item, index, arr1){
//    for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] % 2 != 0){
//         item = arr1[i]
//        }
//    }
//    return item
// }

// let findNow = function(item, index, arr){

//     if(item % 2 != 0){
//         return item
//        }
//    }

// console.log(arr1.find(findNow))
// console.log(arr1.findIndex(findNow))

// let arr = ["a", "b", "a", "c", "b", "d", "e", "e", "c", "z", "z"];

// let value = arr.find((item) => {
//     if(arr.indexOf(item) === arr.lastIndexOf(item)){
//         return item;
//     }
// })

// console.log(value)

let arr = [1, 2, 3, 4, 5];

arr.reduceRight((accumulator, currentVal) =>{
  console.log(currentVal)
} , 0)

// console.log(sumOfArray)

// let names = 'Bilbo, Gandalf, Nazgul';

// let arr = names.split(', ');


// for (let name of arr) {
//   alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
// }

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// let str = arr.join(' '); // glue the array into a string using ;

// alert( str ); // Bilbo;Gandalf;Nazgul