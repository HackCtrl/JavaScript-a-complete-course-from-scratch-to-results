function first() {
    // Что то делаем
    setTimeout( function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first(); 
second(); 

function lernJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошел 4 урок")
}

lernJS("JavaScript", done); 

// Самостоятельное изучение callback:

function sayHello(name, callback) {
    let message = "Привет, " + name + "!"; 
    callback(message)
}

function displayMessage(msg) {
    console.log(msg); 
}
sayHello("Вася", displayMessage);

