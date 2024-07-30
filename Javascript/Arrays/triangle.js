let size = 9;

rightTriangle(size)

function rightTriangle(size){
    for (let i = 1; i <= size; i++) {
        let s = "".padStart(size - i," ");
        for (let j = 1; j <= i; j++) {
            s += i + " ";
        }
        console.log(s);
    }
}