let num = 50; 

if (num < 49) {
    console.log("no");
} else if (num > 100) {
    console.log("Mnogo"); 
} else {
    console.log("Verno");
};


(num == 50) ? console.log("verno") : console.log("neverno"); 

switch (num) {
    case num < 40: 
        console.log("neverno");
        break; 
    case num > 100: 
        console.log("mnogo"); 
        break; 
    case num > 80: 
        console.log("vse mnogo");
        break; 
    case num == 50: 
        console.log("verno");
        break;   
    default: 
        console.log("error");
        break; 
}


// while (num < 50) {
    // console.log(num);
    // num++;  
// }

do {
    console.log(num);
    num++ 
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue; 
    }
    console.log(i);
}