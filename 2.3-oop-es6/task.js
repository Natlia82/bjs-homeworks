//задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {

        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else this._state = state;
    }

    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";

    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";

    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

//задача №2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];

    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);

        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
                const del = this.books[i];
                this.books.splice(i, 1);
                return del;

            }

        }

        return null;
    }

}

//задача №3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.journal = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade > 0 && grade < 6) {
            if (this.journal[subject]) {
                this.journal[subject].push(grade);
            } else {
                this.journal[subject] = [];
                this.journal[subject].push(grade);
            }

        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);

        }

        return this.journal[subject].length;

    }

    getAverageBySubject(subject) {
        if (!this.journal[subject]) {
            return 0;
        }
        let summ = 0;
        for (let i = 0; i < this.journal[subject].length; i++) {
            summ += this.journal[subject][i];
        }
        const average = summ / this.journal[subject].length;
        return average;
    }

    getTotalAverage() {
        let summa = 0;
        let kol = 0;
        for (const key in this.journal) {
            kol++;
            summa += this.getAverageBySubject(key);
        }

        return summa / kol;

    }

}

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75