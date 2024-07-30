// Find Index of first odd number - (using array method and also not using array methods) 

let arr = [4,6,2,5,6,3,40];
let pos = -1;
for(ele of arr){
    if(ele % 2 != 0){
        pos =  arr.indexOf(ele);
        break;
    }
}
console.log(pos)
