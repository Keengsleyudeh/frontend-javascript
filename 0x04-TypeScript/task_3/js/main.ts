///<reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';


const row : RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}

const newRowID : RowID = 22;

//Insert a new row
CRUD.insertRow(row);

//Update the row
const updatedRow : RowElement = {...row, age: 23};
CRUD.updateRow(newRowID, updatedRow);

//delete the row
CRUD.deleteRow(newRowID);



