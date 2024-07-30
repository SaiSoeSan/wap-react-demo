let numbers = [4,5,3,5,3,16];

let result = [];
for(ele of numbers){
    if(ele % 4 == 0){
        result.push(ele);
    }
}
console.log(result)
