import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSelect, updateCompany } from '../features/companiesSlice';

interface CompanyRowProps {
  company: {
    id: number;
    name: string;
    address: string;
    selected: boolean;
  };
}

const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(company.name);
  const [address, setAddress] = useState(company.address);

  const handleSelect = () => {
    dispatch(toggleSelect(company.id));
  };

  const handleUpdate = () => {
    dispatch(updateCompany({ id: company.id, name, address }));
  };

  return (
    <tr style={{ backgroundColor: company.selected ? '#d3f3ff' : 'white' }}>
      <td>
        <input type="checkbox" checked={company.selected} onChange={handleSelect} />
      </td>
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleUpdate}
        />
      </td>
      <td>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={handleUpdate}
        />
      </td>
    </tr>
  );
};

export default CompanyRow;