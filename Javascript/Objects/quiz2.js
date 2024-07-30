// // Print all flowers whose color is ‘pink’ 
// let list = [{flower:'Rose',color:'red'},{flower:'Jinnia',color:'pink'}, {flower:'Hibiscus',color:'pink'}] 
// console.log(printAllPinkFlowers(list));//[ 'Jinnia', 'Hibiscus' ] 

// function printAllPinkFlowers(){
//     let arr = [];
// }


// //dont use 'substring'
// function substring(string,start,end){
//     if(start>string.length)
//         return '';
//     let newString='';
//     end = (!end || end>string.length)?string.length:end;
//     start = (start<0)?0:start;
    
//     for(let i=start;i<end;i++){
//         newString+=string.charAt(i);
//     }
//     return newString;
// }
// console.log(substring("Javascript",0,4));//java

// //If end Index is not given,-> endIndex = string length 
// console.log(substring("Javascript",4));//script

// //If end Index is > string length,-> endIndex = string length 
// console.log(substring("Javascript",4,40));//script

// //If startIndex is greater than string length -> return empty string
// console.log(substring("Javascript",40));//'' (empty string)

// //If startIndex is less than 0 -> start from ‘0’ 
// console.log(substring("Javascript",-2));//Javascript

// console.log(substring("Javascript",0));//Javascript

function printPattern(string){
    for(let i=0;i<string.length;i++){
        if(i==0)
            console.log(string[i]);
        else{
            let space = '';
            for(let j=0;j<4*i;j++){
                space+=' ';
            }
            if(i<string.length-1)
                console.log(space+"*")
            console.log(space+string[i])
        }    
    }
    // console.log(printString);
}
console.log(printPattern('International'))

// buildOctagon("hello")

function buildOctagon(str){

    let initialLength = str.length;
    console.log(" ".repeat(initialLength) + str);

    // console.log(" ".repeat(str.le))
    
    // let str=string.charAt(0);
    // for(let i=1;i<string.length;i++){
    //     str+=' '+string.charAt(i)
    // }
    // // console.log(str.padStart(str.length,' '));
    // console.log(addSpace(string.length) + str);
    // // console.log(str.padStart(str.length,' '))

    // let k =1;
    // for(let i=string.length-2;i>=0;i--){
    //     let gap = addSpace(str.length+(k*2));
    //     console.log(addSpace(i)+string.charAt(k)+gap+string.charAt(i));
    //     k++
    // }
}

function addSpace(spaceLength){
    let str = ' ';
    for(let i=0;i<spaceLength;i++){
        str+=' ';
    }
    return str;
}
// buildOctagon('Javascript')
// buildOctagon('apple')

// function printAllPinkFlowers(array){
//     let flowers=[];
//     for(let ele of array){
//         if(ele.color=='pink')
//             flowers.push(ele.flower)
//     }
//     return flowers;
// }

// let list = [{flower:'Rose',color:'red'},{flower:'Jinnia',color:'pink'},
// {flower:'Hibiscus',color:'pink'}]
// console.log(printAllPinkFlowers(list));//[ 'Jinnia', 'Hibiscus' ]

// function sumElements(array){
//     let sum = 0;
//     for(let ele of array){
//         for(let inner of ele){
//             sum+=inner
//         }
//     }
//     return sum
// }
// console.log(sumElements([[10,2,30],[4,5],[40]]));//91
// console.log(sumElements([[4,1],[5,8,2],[9,2,8,1]]));//40