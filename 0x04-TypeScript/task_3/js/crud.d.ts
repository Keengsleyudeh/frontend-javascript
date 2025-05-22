import { RowElement, RowID } from './interface';

// Declare the module for crud.js
declare module 'crud' {
  // Create a new row
  export function insertRow(row: RowElement): number;

  // Delete a row by id
  export function deleteRow(rowId: RowID): void;

  // Update a row by id
  export function updateRow(rowId: RowID, row: RowElement): RowElement;
}
