let money, time; 

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start(); 

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

// В виде функции: 

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", ''); 
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done"); 
            appData.expenses[a] = b; 
        } else {
            console.log("error"); 
        }
    };
}

chooseExpenses(); 

// В виде цикла:

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	    b = prompt("Во сколько обойдется?", ''); 

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done"); 
//         appData.expenses[a] = b; 
//     } else {
//         console.log("error"); 
//     }
// }; 

/*
let i = 0; 
while (i < 2 ) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    b = prompt("Во сколько обойдется?", ''); 

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done"); 
        appData.expenses[a] = b; 
    } else {
        console.log("error"); 
    }
    i++; 
}
*/

/*
let i = 0; 
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	    b = prompt("Во сколько обойдется?", ''); 

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done"); 
        appData.expenses[a] = b; 
    } else {
        console.log("error"); 
    }
    i++;
} while (i < 2); 
*/

appData.moneyPerDay = (appData.budget / 30).toFixed(); 

alert("Бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("minimum");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("srednia"); 
} else if (appData.moneyPerDay > 2000) {
    console.log("visoki");
} else {
    console.log("error");
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накомлений?");
            precent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent; 
        alert("Доход в месяц с вашего дипозита: " + appData.monthIncome);
    }
}

checkSavings();