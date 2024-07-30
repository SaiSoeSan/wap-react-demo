let arr = [{name:'Ram',age:20},{name:'Sai',age:30}];

let minPerson = arr[0];
for(obj of arr) {
    let age = obj["age"];
    if(age < minPerson.age){
        minPerson = obj;
    }
}
console.log(minPerson.name);

