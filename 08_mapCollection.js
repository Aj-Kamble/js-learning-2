let mapStudentMarks = new Map();

mapStudentMarks.set("Elon", 90);
mapStudentMarks.set("Stew", 56);
mapStudentMarks.set("Jenny", 45);
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 80);
mapStudentMarks.set("Larry", 84);

//to add duplicate key its not allowed in map but is override
mapStudentMarks.set("Andy", 100);

//adding duplicate values its allowed in map
mapStudentMarks.set("Raj", 100);
console.table(mapStudentMarks);

// getting values using key "get()"
let jennyMarks = mapStudentMarks.get("Jenny");
console.log("Jenny Marks is: ",jennyMarks);

// to see key is available or not using "has()"
let isAvailable = mapStudentMarks.has("Larry");
console.log(`Is key "Larry" Available : ${isAvailable}`);

console.log(`is key "Ajay" available : ${mapStudentMarks.has("Ajay")}`);

// find length of map using size
const lengthOfMap = mapStudentMarks.size;
console.log(`Size of map or total elements in map is: ${lengthOfMap} `);

// detete one element based on key using delete method
console.log(`Deleted Element is :`, mapStudentMarks.delete("Andy"));
console.table(mapStudentMarks);

console.log("\n");

console.log(`========== Keys() and value() method ================`);
const key = mapStudentMarks.keys();
for (const iterator of key) {
    console.log(iterator);
}

const value = mapStudentMarks.values();
for (const iterator of value) {
    console.log(iterator);
}

console.log("\n");
console.log("============== traversing on map ===================");
const keyMaps = mapStudentMarks.keys();
for (const key of keyMaps) {
    const values = mapStudentMarks.get(key);
    console.log(`Student name : ${key} and Marks is: ${values}`);
}