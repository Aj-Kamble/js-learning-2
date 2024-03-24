
console.log(`=========== iterate array using For In ==================`);
const arrays = [2, 4, 1, 7, 9, 8]
for (const index in arrays) {
    console.log(index, arrays[index]);
}

console.log(`------------------------------------------------------`);
console.log("\n");

console.log(`=========== odd index position Elements ==================`);
const array = [2, 4, 1, 7, 9, 8]
for (const index in arrays) {
    if (index % 2 != 0) {
        console.log(arrays[index]);
    }
    
}