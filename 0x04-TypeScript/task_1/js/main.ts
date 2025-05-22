interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: string | boolean | number | undefined | object;
}

// Example usage:
const teacher3: Teacher = {
    firstName: 'Kingsley',
    lastName: 'Udeh',
    fullTimeEmployee: false,
    location: 'Nigeria',
    contract: true,
};

console.log(teacher3);