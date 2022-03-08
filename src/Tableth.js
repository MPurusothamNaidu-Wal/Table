/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import DataTable from 'react-data-table-component';
const pageColumns = [
    { name: 'ID', selector: (row) => row.id, sortable: true },
    { name: 'Name', selector: (row) => row.name, sortable: true },
  ];
  const pageData = [
    { id: 1, name: "nani" },
    { id: 2, name: "usha" },
    { id: 3, name: "balu" },
    { id: 4, name: "nikhil" },
    { id: 5, name: "kumar" },
    { id: 6, name: "uma" },
    { id: 7, name: "cherry" },
    { id: 8, name: "prem" },
    { id: 9, name: "punith" },
    { id: 10, name: "bala" },
    { id: 11, name: "john" },
    { id: 12, name: "hitha" },
  ];
  export const PageTable = () => {
    return (
      <div>
        <DataTable
          columns={pageColumns}
          data={pageData}
          pagination
          // paginationDefaultPage={1}
          // paginationTotalRows="5"
        />
      </div>
    );
  };