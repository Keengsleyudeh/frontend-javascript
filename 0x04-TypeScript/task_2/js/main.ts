
// Advanced types Part 1 task 2

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class TeacherClass implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
    if (typeof salary === 'number' ) {
        if (salary < 500) {
            return new TeacherClass();
        } else {
            return new Director();
        }
    }

    if (typeof salary === 'string') {
        const amt = salary.slice(1);
        const numAmt = parseFloat(amt);
        if (numAmt < 500) {
            return new TeacherClass();
        } else {
            return new Director();
        }  
    }
}

//Creating functions specific to employees
function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return (employee instanceof Director); 
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(800)))


//String literal types
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
        case "Math":
            return "Teaching Math";
        case "History":
            return "Teaching History";
        default:
            return "Unknown subject";
    }
}
console.log(teachClass("History"));




//Task 3 Ambient Namespaces