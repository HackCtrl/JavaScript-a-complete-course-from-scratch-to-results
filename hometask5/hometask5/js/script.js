let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"), 
    title = document.getElementById("title"), 
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

// Восстановить порядок в меню, добавить пятый пункт
menu.insertBefore(menuItem[2], menuItem[1]); 

menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый пункт"; 
menu.appendChild(menuItemLi);

// Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.textContent = "Мы продаем только подлинную технику Apple"; 

// Удалить рекламу со страницы - Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
adv.remove(); 

let yourOptions = prompt("Ваше отношение к технике Apple?");
promptforApple.textContent = yourOptions; 