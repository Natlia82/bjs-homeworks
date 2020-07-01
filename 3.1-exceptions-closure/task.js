//задача №1
function parseCount(str) {
    const figure = Number.parseInt(str, 10);
    if (isNaN(figure)) {
        const err = new Error("Невалидное значение");
        return err;
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
        if (((this.a + this.b) < this.c) || ((this.b + this.c) < this.a) || ((this.c + this.a) < this.b)) {
            throw console.log("Невалидное значение");
        }

    }



    getPerimeter() {
        const p = this.a + this.b + this.c;
        return p;


    }

    getArea() {

        const p = this.getPerimeter() / 2;
        const s = Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)));
        return (Math.trunc(s * 1000)) / 1000;

    }

}

function getTriangle(a, b, c) {

    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch {
        expect(triangle.getArea()).toEqual("Ошибка! Неправильный треугольник");
        expect(triangle.getPerimeter()).toEqual("Ошибка! Неправильный треугольник");
        return triangle;
    }


}