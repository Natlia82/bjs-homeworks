//задача №1
function parseCount(str) {
    const figure = Number.parseInt(str, 10);
    if (isNaN(figure)) {
        throw console.log("Невалидное значение");
    }
    return figure;
}

function validateCount(line) {
    try {
        const figure = parseCount(line);
        return figure;
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
    }

    law() {
        const mass = [this.a, this.b, this.c];
        let i2;
        let i3;
        for (let i = 0; i < 3; i++) {
            i2 = ((i + 1) < 3) ? (i + 1) : (i - 2);
            i3 = ((i + 2) < 3) ? (i + 2) : (i - 1);
            if ((mass[i] + mass[i2]) < mass[i3]) {
                throw console.log("Невалидное значение");
            }
        }

    }

    getPerimeter() {
        try {
            this.law();
            const p = this.a + this.b + this.c;
            return p;
        } catch {
            return "Ошибка! Треугольник не существует";
        }

    }

    getArea() {
        try {
            this.law();
            const p = this.getPerimeter() / 2;
            const s = Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)));
            return (Math.trunc(s * 1000)) / 1000;
        } catch {
            return "Ошибка! Треугольник не существует";
        }

    }

}

function getTriangle(a, b, c) {
    const triangle = new Triangle(a, b, c);

    try {
        triangle.law();
        return triangle;
    } catch {
        return triangle.getArea() + " " + triangle.getPerimeter();
    }


}