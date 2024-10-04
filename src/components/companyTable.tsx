import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectAll, addCompany, deleteSelected } from '../features/companiesSlice';
import CompanyRow from './companyRow';
import { Company } from '../features/companiesSlice';

const CompanyTable: React.FC = () => {
    interface RootState {
        companies: Company[];
    }
    const dispatch = useDispatch();
    const companies = useSelector((state: RootState) => state.companies);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleSelectAll(e.target.checked));
  };

  const handleAddCompany = () => {
    const name = prompt('Введите название компании:') || '';
    const address = prompt('Введите адрес компании:') || '';
    if (name && address) {
      dispatch(addCompany({ name, address })); 
    }
  };

  const handleDeleteSelected = () => {
    dispatch(deleteSelected());
  };

  return (
    <>
      <button onClick={handleAddCompany}>Добавить компанию</button>
      <button onClick={handleDeleteSelected} style={{ marginLeft: '10px' }}>Удалить выделенные</button>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th>Название компании</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CompanyTable;