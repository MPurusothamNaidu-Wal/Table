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
const Newcolumns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'TITLE',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'YEAR',
      selector: (row) => row.year,
      sortable: true,
    },
  ];
  
  const NewData = [
    {
      id: 1,
      title: 'sr ntr',
      year: '2000',
    },
    {
      id: 2,
      title: 'Bala Krishna',
      year: '2002',
    },
    {
      id: 3,
      title: 'Kalyan Ram',
      year: '2004',
    },
    {
      id: 4,
      title: 'Jr ntr',
      year: '2006',
    },
    {
      id: 5,
      title: 'Abhayram',
      year: '2008',
    },
  ];
  
  export const SortTable = () => {
    return (
      <div className="borderClass">
        <DataTable columns={Newcolumns} data={NewData} pagination />
      </div>
    );
  };
  export default SortTable;