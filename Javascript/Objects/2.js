// Minify Object Get objects that has properties of name, ‘a’ [{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}] 


let objectArray = [{a:1,b:2},{a:2,b:4}];
console.log(minify(objectArray))
function minify(objectArray){
    let result = [];
    for(ele of objectArray){
        if(ele.hasOwnProperty('a')){
            let obj = {
                a : ele['a']
            };
            result.push(obj);
        }
    }
    return result;
}