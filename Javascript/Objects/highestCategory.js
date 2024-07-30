// let array = [{ product: 'car', category: 'toys', rating: 8 },
//     { product: 'legos', category: 'toys', rating: 9 },
//     { product: 'iphone', category: 'Mobile', rating: 10 },
//     { product: 'samsung', category: 'Mobile', rating: 6 },
//     { product: 'sofa', category: 'furniture', rating: 10 }];
    
//     let array2 = [{ product: 'Gardening Tools', category: 'tools', rating: 8 },
//     { product: 'Power tools', category: 'tools', rating: 10 },
//     { product: 'sofa', category: 'Furniture', rating: 8 },
//     { product: 'Tables', category: 'Furniture', rating: 7 },
//     { product: 'stools', category: 'Furniture', rating: 7 }
// ]

// highestRatedCategory(array);

// function highestRatedCategory(array) {
//     let categoryArray = {};
//     for (let ele of array) {
//         if (categoryArray[ele.category]) {
//             categoryArray[ele.category] = (ele.rating + categoryArray[ele.category]) / 2
//         } else {
//             categoryArray[ele.category] = ele.rating
//         }
//     }
//     console.log("here");
//     console.log(categoryArray);
//     let highestCategory = 0;
//     let rating = 0;
//     for (let key in categoryArray) {
//         if (categoryArray[key] > rating) {
//             rating = categoryArray[key];
//             highestCategory = key;
//         }
//     }
//     return highestCategory;
// }

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi",'pear']; 
// fruits.copyWithin(2,0,2);
// console.log(fruits);
console.log(copyWithin(fruits,2,0,2));

function copyWithin(arr,copyIdx,start,end){

    let newArray = [];
    for (let i = 0; i < copyIdx; i++) {
        newArray.push(arr[i])
    }

    end = end ? end : arr.length - newArray.length;

    for (let i = start; i < end; i++) {
        newArray.push(arr[i]);
    }

    //if  there is still length to add remaining items
    if(newArray.length < arr.length){
        for (let i = newArray.length; i < arr.length; i++) {
            newArray[i] = arr[i]
        }
    }

    return newArray


    // let newArray = [];
    // //copy the elements 0 to compyInx
    // for (let i = 0; i < copyIdx; i++) {
    //     newArray[i] = array[i];
    // }
    // console.log(newArray);

    // // let myArry =[];
    // // endIdx = endIdx?endIdx:array.length;
    // // let copyCounter=startIdx

    // // for(let i=0;i<array.length;i++){
    // //     if(i>=copyIdx && copyCounter<endIdx){
    // //        myArry[i] = array[copyCounter];
    // //        copyCounter++
    // //     }else{
    // //         myArry[i]=array[i];
    // //     }
    // // }
    // // return myArry;
}


// let arr =[13, 11, 9];
// console.log(missingInteger(arr));

// function missingInteger(array) {
//     //find max
//     let maxElement = array[0];
//     for (let ele of array) {
//         if (ele > maxElement)
//             maxElement = ele
//     }
//     let missingNumbers = [];

//     for (let i = 1; i <= maxElement; i++) {
//         if (!array.includes(i))
//             missingNumbers.push(i);
//     }
//     return missingNumbers;
// }

// Find triplets in the array whose sum is equal to given sum 

// console.log(findTriplet([1,2,3,4,5,9],9));//[ [ 1, 3, 5 ], [ 2, 3, 4 ] ]

// function findTriplet(array, sum) {
//     let triplet = [];

//     for (let i = 0; i < array.length; i++) {
//         let tripletSum = 0;
//         for (let j = i + 1; j < array.length; j++) {
//             for (let k = j + 1; k < array.length; k++) {
//                 tripletSum = array[i] + array[j] + array[k];
//                 if (tripletSum == sum) {
//                     triplet.push([array[i], array[j], array[k]])
//                 }
//             }
//         }
//     }
//     return triplet;
// }