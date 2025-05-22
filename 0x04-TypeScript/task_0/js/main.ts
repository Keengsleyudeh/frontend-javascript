
interface Student {
    FirstName: string;
    LastName: string;
    Age: number;
    Location: string;
}

const student1: Student = {
    FirstName: "John",  
    LastName: "Doe",
    Age: 20,
    Location: "New York"    
}

const student2: Student = {
    FirstName: "Jane",  
    LastName: "Zoe",    
    Age: 21,
    Location: "Rabat"  
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement ("table");
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.FirstName;
  cell2.textContent = student.Location;
});

 document.body.appendChild(table);
console.log(document.body.contains(table)); 