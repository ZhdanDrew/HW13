const str2 = "AaaaAaaAaaAaaaA";
let uppercaseCount = 0;
let lowercaseCount = 0;

for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        uppercaseCount++;
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        lowercaseCount++;
    }
}

console.log("Upper:" + uppercaseCount);
console.log("Lower:" + lowercaseCount);
