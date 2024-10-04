import React from 'react';
import CompanyTable from './components/companyTable';
import './App.css';

const App: React.FC = () => {
  return (
      <div>
        <h1 className='header'>Список компаний</h1>
        <CompanyTable />
      </div>
  );
};

export default App;
