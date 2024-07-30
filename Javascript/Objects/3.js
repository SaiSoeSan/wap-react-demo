// findOldestPerson[{name:’Ram’,age:20},     {name:’Lakshman’,age:15}]=>Ram 

// let objArray = [{name:'Ram',age:20}, {name:'Lakshman',age:15}];
// let oldestPerson = objArray[0];
// for(ele of objArray){
//     let oldestAge = ele.age;
//     if(oldestAge > oldestPerson.age){
//         oldestPerson = ele;
//     }
// }
// console.log(oldestPerson);


// findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=> {name:’Lakshman’,age:15} 

// Find the person whose age is between 16 and 17 years. 
let objArray = [{name:'Ram',age:20}, {name:'Lakshman',age:16}];
let resultPerson = undefined;
for(ele of objArray){
    console.log(ele.age)
    if(ele.age > 15 && ele.age < 17){
        console.log("here")
        resultPerson = ele;
    }
}
console.log(resultPerson);