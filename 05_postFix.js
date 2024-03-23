var a = 5;
var b = a++;
console.log(a);
console.log(b);

console.log(`-------------------------------------------------`);

var n1 = 5;
var result = n1++ + ++n1 + n1++;
console.log(result);
console.log(n1);


console.log(`-------------------------------------------------`);

var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(b);
console.log(a);

console.log(`-----------------------------------------------`);

var z = 4;
var y = z-- + ++z + ++z + z++;