namespace Subjects {
    // Interface declaration merging
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
    }

    // Cpp class extending Subject
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
