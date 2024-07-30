//1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

// let pi  = 3.142;
// function max(a,b){
//     console.log(pi);
//     if(a > b) return a;
//     else return b;
// }
// console.log(max(4,5));

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

// function maxThree(a,b,c){
//     if(a > b && a > c){
//         return a;
//     }else if(b > a && b > c) {
//         return b;
//     }else{
//         return c;
//     }
// }

// console.log(maxThree(30,40,50));

//3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// console.log(isVowel('j'));

// function isVowel(char){
//     let vowels = ['a','e','i','o','u'];
//     if(vowels.indexOf(""+char) != -1){
//         return true;
//     }
//     return false;
// }

//4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

// let arr = [1,2,3,4];
// let sum = arr.reduce((x,y) => x * y , 1);
// console.log("multiply is " + sum);

// let arr = [1,2,3,4];
// let multiply = arr.reduce((x,y) => x * y , 1);
// console.log("multiply is " + multiply);

//5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

// let str = "saisoes san";
// console.log(str.split("").reverse().join(""));


//6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

// let integerArray = [20,40,60];
// console.log(findLargestValue(integerArray));

// function findLargestValue(integerArray){
//     let largestNumber = integerArray[0];
//     for (let index = 1; index < integerArray.length; index++) {
//         const element = integerArray[index];  
//         if(element > largestNumber){
//             largestNumber = element;
//         }
//     }
//     return largestNumber;
// }


//7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// filterLongWords(["sai","soeee","saisoesan"],0);
// function filterLongWords(arr,position){
//     if(position < 0 || position > arr.length) return;
//     let longest = [];
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element.length > arr[position].length){
//             longest.push(element);
//         }
//     }
//     console.log("longest array")
//     console.log(...longest);
// }

// let string = 'saisoesan';
// let resultArray = findVowels(string);
// console.log(resultArray);


// function findVowels(string){
//     let vowels = ['a','e','i','o','u'];
//     let result = [];
//     for(let i = 0; i < string.length; i++){
//         if(vowels.indexOf(string[i]) != -1){
//             result.push(string[i]);
//         }
//     }
//     return result;
// }

// console.log(reverse("hello"));

// function reverse(str){
//     return str.split("").reverse().join("");
// }

// let words  = ["hello","saisoesan","world"];
// let longest = words[0];
// for (let index = 1; index < words.length; index++) {
//     const element = words[index];
//     if(element.length > longest.length){
//         longest = element;
//     }
// }
// console.log(longest);

// Index of from String

// let myName = "sais oe san";
// let pos = indexOf(myName,"o");
// function indexOf(str,findString){
//     let arr = [];
//     if(typeof str == 'string'){
//         arr = toArray(str);
//     }
//     // let arr = [...str]; // convert string into array
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index] == findString){
//             return index;
//         }
//     }
//     return -1;
// }

//Index Of from Array
// let names = ["saisoesan","nan","thetzaw","nan"];
// console.log("last index of " + lastIndexOf(names,"nan"));
// function lastIndexOf(names,item){
//     let pos = -1;
//     for (let index = 0; index < names.length; index++) {
//         const element = names[index];
//         if(element == item){
//             pos = index;
//         }
//     }
//     return pos;
// }

//string to Array
function toArray(string){
    return Array.from(string);
    return [...str];
}

// let arr1 = "saisoesan";
// console.log("include " + includes(arr1,"o"));

//includes
// function includes(arr,item,pos){
//     let arr4 = [];
//     if(pos == undefined) pos = 0;
//     if(typeof arr == 'string'){
//         arr4 = toArray(arr);
//     }
//     for (let index = pos; index < arr4.length; index++) {
//         const element = arr4[index];
//         if(element == item){
//             return true;
//         }
//     }
//     return false;
// }


// console.log("sa is, oes an".split(","));

// let arr5 = "sa is, oes an";
// let result = split(arr5,",");
// console.log(result);
// function split(myString,separator){
//     let arr = [];
//     if(typeof myString != 'string'){
//         return;
//     }
//     if(separator == undefined || !myString.includes(separator)){
//         arr.push(myString)
//     }else{
//         //with separator
//         let item = '';
//         for (let index = 0; index < myString.length; index++) {
//            let element = myString.charAt(index);
//            if(element != separator){
//                 item += element;
//            }else{
//                 arr.push(item);
//                 item = '';
//            }
//            if(index == myString.length - 1){
//             arr.push(item)
//            }
//         }
//     }
//     return arr;
// }

//slice
console.log(["sai","soe","san"].slice(-3));
console.log(slice(['sai','soe','san'],-3));

function slice(arr,start,end){
    let resultArr = [];

    if(end < 0) return resultArr;
    if(start > arr.length) return resultArr;

    //replace with default
    if(start == undefined) start = 0;
    if(end > arr.length || end == undefined) end = arr.length;

    if(start < 0){
        start = -(start);
        if(start >= arr.length){
            start = 0;
        }else{
            start = arr.length - start;
        }
    }

    for (let index = start; index < end; index++) {
        let ele = arr[index];
        if(ele != undefined)
            resultArr.push(arr[index]);
    } 
    return resultArr;
}





// convertObjectToArray
// function convertObjectToArray(){

// }




/* 1
   22
   333
*/

// let count = 9;

// for (let index = 1; index <= count; index++) {
//     let arr = [];
//     for (let i = 1; i <= index; i++) {
//         arr.push(index);
//     }
//     console.log(...arr);
// }






