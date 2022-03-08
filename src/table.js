/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import DataTable from 'react-data-table-component';
// eslint-disable-next-line import/newline-after-import
import React from 'react';
const columns = [
  {
    name: 'ID',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'TITLE',
    selector: (row) => row.title,
  },
  {
    name: 'join',
    selector: (row) => row.join,
  },
];
const data = [
  {
    id: 1,
    title: 'Karthik',
    join: '2021',
  },
  {
    id: 2,
    title: 'Purusotham',
    join: '2020',
  },
  {
    id: 3,
    title: 'Mulaz',
    join: '2021',
  },
  {
    id: 4,
    title: 'Mithun',
    join: '2020',
  },
  {
    id: 5,
    title: 'Keethan',
    join: '2020',
  },
];
export const ReactTable = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
};

export default ReactTable;