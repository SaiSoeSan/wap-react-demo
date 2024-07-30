// Transform Array to print the type of elements in the Array  getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”] 

let arr = [40,"apple",{a:1}];
let result = [];
for(ele of arr){
    result.push(typeof ele)
}
console.log(result)