/* eslint-disable import/newline-after-import */
/* eslint-disable react/self-closing-comp */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable prettier/prettier */
import ReactTable from './table';
import './App.css';
import SortTable from './tableSort';
import { PageTable } from './Tableth';
function App() {
  // eslint-disable-next-line prettier/prettier
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    // eslint-disable-next-line react/jsx-filename-extension
    // eslint-disable-next-line react/self-closing-comp
    <div>
      <ReactTable></ReactTable>
      <SortTable></SortTable>
      <PageTable></PageTable>
    </div>
  );
}

export default App;
