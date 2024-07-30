// destructureArray([50,”apple”,{a:1}])=>  {number0:50,string1:”apple”,object2:{a:1}}  

let arr = [50,"apple",{a:1}];
let finalObject = {};
let arrayOfObject = [];
let i = 0;
for(ele of arr){
    let key = typeof ele +""+ i;
    finalObject[key] = ele;
}

console.log(finalObject)

