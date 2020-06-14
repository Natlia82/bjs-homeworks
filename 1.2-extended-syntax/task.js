"use strict";

function getResult(a, b, c) {
    let D = (Math.pow(b, 2)) - 4 * a * c;
    let rezult = [];
    if (D > 0) {
        rezult[0] = (-b + (Math.sqrt(D))) / 2 * a;
        rezult[1] = (-b - (Math.sqrt(D))) / 2 * a;
    } else if (D == 0) {
        rezult[0] = (-b + (Math.sqrt(D))) / 2 * a;
    }


    return rezult;
}


function getAverageMark(marks) {
    let summ = 0;
    let averageMark;
    if (marks.length > 5) {
        console.log("оценок больше 5");
        marks = marks.slice(0, 5);
    }
    if (marks.length != 0) {
        for (const iterator of marks) {
            summ += iterator;
        }
        averageMark = (summ / marks.length);
    } else {
        averageMark = 0;
    }

    return averageMark;
}


function askDrink(name, dateOfBirthday) {
    let dat = new Date();
    let result;
    let age = (dat.getFullYear() - dateOfBirthday.getFullYear());
    let month = (dat.getMonth() > dateOfBirthday.getMonth()) ? age : age = age - 1;
    (age > 18) ? result = `Не желаете ли олд-фэшн, ${name} ?`: result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    return result;
}