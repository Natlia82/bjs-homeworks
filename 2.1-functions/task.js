//задача №1 
function getSolutions(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    let x1;
    let x2;
    let roots = [];

    let rezult = {
        d,
        roots
    }

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        roots[0] = x1;
        roots[1] = x2;

    } else if (d == 0) {
        x1 = (-b) / (2 * a);
        roots[0] = x1;
    }

    return rezult;
}

function showSolutionsMessage(a, b, c) {
    let rezult = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${rezult.d}`);
    if (rezult.roots.length < 1) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (rezult.roots.length == 1) {
        console.log(`Уравнение имеет один корень X₁ = ${rezult.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два кореня X₁ = ${rezult.roots[0]}, X₂ = ${rezult.roots[1]}`);
    }

}

//задача №2

function getAverageScore(data) {
    let summ = 0;
    let diary = {};
    if (data.length > 10) {
        console.log("Предметов более 10");
        break;
    }
    for (value in data) {
        summ += getAverageMark(data[value]);
        diary[value] = getAverageMark(data[value]);

    }
    if (summ > 0) {
        diary['average'] = summ / data.length;
    } else diary['average'] = 0;

    console.log(diary);
    return diary;
}

function getAverageMark(marks) {
    let summa = 0;
    for (estimation of marks) {
        summa += estimation;
    }
    return summa / marks.length;
}

/*getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometria: [2, 4, 5],
    russian: [3, 3, 4, 5],
    phusics: [5, 5],
    muzic: [2, 2, 6],
    english: [4, 4, 3],
    poetru: [5, 3, 4],
    fimia: [2],
    french: [4, 4]
});*/

//задача №3

function getPersonData(secretData) {
    let rezult = {};
    for (value in secretData) {
        if (value == "aaa") {
            rezult['firstName'] = getDecodedValue(secretData[value]);
        } else {
            rezult['lastName'] = getDecodedValue(secretData[value]);
        }

    }

    return rezult;
}

function getDecodedValue(secret) {
    if (secret == 0) {
        return "Родриго";
    } else return "Эмильо";

}

getPersonData({ aaa: 0, bbb: 0 });