let soldat = {
    heal: 400, 
    armor: 100
};

let john = {
    health: 100
}; 

john.__proto__ = soldat; 

console.log(john); 
console.log(john.armor); 