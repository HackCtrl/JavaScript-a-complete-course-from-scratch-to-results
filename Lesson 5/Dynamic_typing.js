// 3, 4, 6
// 'string', "string", `string`
// true / false
// let a; 
// console.log(a);
// const obj = {
//     name: 'Alex'
// }
//              0  1  2  3
// const arr = [1, 2, 5, 6];

// -- to Streing: 

// 1) 
console.log(typeof(String(null))); 
console.log(typeof(String(4))); 

// 2) 
console.log(typeof("ww" + 5));
console.log(typeof("ww" + false));
console.log("https://vk.com/catalog/" + 5);

// -- to Number

// 1) 
console.log(typeof(Number("5")));

// 2) 
console.log(typeof(+"5"));
console.log(typeof(5 + +"5"));

// 3) 
console.log(typeof(parseInt("15px", 10))); 

let ans = +prompt("Hello?", ''); 

// 0, '', null, undefined, NaN - Всегда false

// -- to Bolean

// 1) 
let switcher = null; 
if(switcher) {
    console.log("Working..");
}

switcher = 1; 

if(switcher) {
    console.log("Working..");
}

// 2) 
console.log(typeof(Boolean("5")));

// 3) 
console.log(typeof(!!"5"));