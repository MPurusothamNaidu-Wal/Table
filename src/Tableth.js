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
    { name: 'Serial No', selector: (row) => row.serialno, sortable: true },
  ];
  const pageData = [
    { id: 1, serialno: 111 },
    { id: 2, serialno: 222 },
    { id: 3, serialno: 333 },
    { id: 4, serialno: 444 },
    { id: 5, serialno: 555 },
    { id: 6, serialno: 666 },
    { id: 7, serialno: 777 },
    { id: 8, serialno: 888 },
    { id: 9, serialno: 999 },
    { id: 10, serialno: 101010 },
    { id: 11, serialno: 111111 },
    { id: 12, serialno: 121212 },
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