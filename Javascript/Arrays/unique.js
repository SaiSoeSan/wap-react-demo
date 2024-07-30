let a = [2,4,4,5,5,6,6,25];
a.sort();
let result = [];

for (let i = 0; i < a.length; i++) {
    if(i == 0){
        if(a[i] == a[i +1]){
            break;
        }
    }else if(i == a.length -1){
        if(a[i] == a[i -1]){
            break;
        }
    }else{
        if(a[i] == a[i-1] || a[i] == a[i +1]){
            break;
        }
    }
    result.push(a[i]);
}
console.log(result)