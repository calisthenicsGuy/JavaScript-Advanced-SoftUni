class Person {
    constructor(name, email, type) {
        this.name = name;
        this.email = email;
        this.type = type;
    }

    toString() {
        console.log(`${this.type} (name: ${this.name}, email: ${this.email}`);
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email, 'Teacher');
        this.subject = subject;
    }

    toString() {
        console.log(`${this.type} (name: ${this.name}, email: ${this.email}, subject: ${this.subject}`);
    }
}

class Student extends Person {
    constructor(name, age, course) {
        super(name, age, 'Student');
        this.course = course;
    }

    toString() {
        console.log(`${this.type} (name: ${this.name}, email: ${this.email}, course: ${this.course}`);
    }
}

let teacher1 = new Teacher('Petrov', 'petrovi@gmail.com', 'Math');
let teacher2 = new Teacher('Georgiev', 'georgievp@gmail.com', 'Programming');
teacher1.toString();
teacher2.toString();