const arr = [() => "Hello", () => "String", () => 10, () => 0];

function ItStr(type){
    return typeof type() === "string";
}

console.log(arr.filter(ItStr));
