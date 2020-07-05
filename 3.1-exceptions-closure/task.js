//задача №1
function parseCount(str) {
    const figure = Number.parseInt(str, 10);
    if (isNaN(figure)) {
        throw new Error("Невалидное значение");
    }
    return figure;
}

function validateCount(line) {
    try {
        return parseCount(line);
    } catch (e) {
        return e;
    }

}

//задача №2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((b + c) < a) || ((c + a) < b)) {
            throw new Error("Невалидное значение");
        }

    }



    getPerimeter() {

        return this.a + this.b + this.c;


    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const s = Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)));
        return (Math.trunc(s * 1000)) / 1000;

    }

}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea: () => "Ошибка! Треугольник не существует",
            getPerimeter: () => "Ошибка! Треугольник не существует"
        };
    }


}