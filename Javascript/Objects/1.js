// Convert Object to Array  Each element in the array is the concentation of key+value in the object. convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}   => [a1,b12,cstring,dx1,dy2] 

let obj = { a:1,b:[1,2],c:"string",d:{x:1,y:2} };
console.log(convertToArray(obj));
function convertToArray(obj){
    let result = [];
    for(element in obj){
        let value = obj[element];

        if(typeof value == 'object'){
            if(value instanceof Array){
                let combine = '';
                for(ele of value){
                    combine += ele;
                }
                result.push(element + combine);
            }else{
                for(ele in value){
                    let key = ele + value[ele];
                    result.push(element + key);
                }
            }
        }else{
            result.push(element + value)
        }
        // if(Array.isArray(value)){
        //     let combine = '';
        //     for(ele of value){
        //         combine += ele;
        //     }
        //     result.push(element + combine);
        // }else if(typeof value === 'object'){
        //     for(ele in value){
        //         let key = ele + value[ele];
        //         result.push(element + key);
        //     }
        // }else{
        //     result.push(element + value)
        // }
        
    }
    return result;
}