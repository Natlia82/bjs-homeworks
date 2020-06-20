"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    let strica;
    let percentNew = Number(percent);
    let contributionNew = Number(contribution);
    let amountNew = Number(amount);
    let loanAmount;
    let dat = new Date();
    let monthsTotal = (date.getFullYear() - dat.getFullYear()) * 12 + (date.getMonth() - dat.getMonth());
    let payment;
    let rate;
    let summa;

    if (percentNew != percentNew) {
        strica += `Параметр процентная ставка содержит неправильное значение ${percent}`;
    }
    if (contributionNew != contributionNew) {
        strica += `Параметр нечальный взнос содержит неправильное значение ${contribution}`;
    }
    if (amountNew != amountNew) {
        strica += `Параметр общая стоимость содержит неправильное значение ${amount}`;
    }

    loanAmount = amountNew - contributionNew;
    percentNew = percentNew / 100;
    rate = percentNew / 12;
    payment = loanAmount * (rate + rate / (((1 + rate) ** monthsTotal) - 1));

    summa = payment * monthsTotal;
    summa = Math.round(summa * 100) / 100;
    // код для задачи №1 писать здесь
    console.log(strica);
    console.log(summa);
    return summa;
}

function getGreeting(name) {
    let greeting;
    if (!name) {
        name = "Аноним"
    }
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    greeting = `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);

    return greeting;
}