//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
    let str = this.toLowerCase().replace(/\s/g, "");
    let len = str.length;

    for (i = 0; i < len / 2; ++i) {
        if (str[i] != str[len - i - 1]) {
            return false;
        }
    }
    return true;
}

function getAverageMark(marks) {
    let summ = 0;
    let average;
    let roundedAverage;

    if (marks.length == 0) {
        return 0;
    }

    for (value of marks) {
        summ += value;
    }
    average = summ / marks.length;
    roundedAverage = Math.round(average);

    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = Number(birthday);
    let diff = now - birthday;
    let age = diff / 31536000000;

    if (age > 18) {
        return true;
    } else return false;

}