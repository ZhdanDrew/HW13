const str = "Hello World I am here";

function CalcSpace(str){
    let count = 0;
    for (const char of str) {
        if (char === " "){
            count = count + 1;
        }
    }
    return count;
}

console.log(CalcSpace(str), '1st variant')


const SpaceCount = str.split(' ').length - 1;
console.log(SpaceCount, '2nd variant, более короткий');
