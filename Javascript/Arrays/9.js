// Implement push, pop,shift, unshift, concat, splice,slice without the built-in array functions  

let arr = ["sai","soe","san"];
// console.log(arr.unshift("thet"));
// console.log(arr);
console.log(unshift(arr,"thet"));
console.log(arr);

function unshift(arr,item){
    // Shift existing arr to the right
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = item;

    // Return the new length of the array
    return arr.length;

}

// console.log("........");

// console.log(shift(arr));
// console.log(arr);
// function shift(arr){
//     if(arr.length == 0) return undefined;
//     let firstElement = arr[0];
//     //shift elements one position to left
//     for(let i = 1; i < arr.length;i++){
//         arr[i -1 ] = arr[i];
//     }
//     arr.length = arr.length - 1;
//     return firstElement;
// }

//
// push(arr,"thet");

// function push(arr,item){
//     let size = arr.length;
//     arr[size] = item;
//     console.log(arr);
// }

// //remove from last
// console.log(pop(arr));
// console.log(arr)

// function pop(arr){
//     let size = arr.length;
//     if(size === 0) return undefined;
//     let lastElement = arr[size -1];
//     arr.length = arr.length -1;
//     return lastElement;
// }

