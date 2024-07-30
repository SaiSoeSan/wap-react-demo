console.log("saisoesan".substring(0,3));


let str = "saisoesan";
console.log(substring(str));

function substring(str,start,end){
    if(start == undefined) start = 0;
    if (end == undefined ) end = str.length;

    let resultString = '';
    for (let index = start; index < end; index++) {
        let element = str.charAt(index);
        resultString += element;
    }
    return resultString;
}
