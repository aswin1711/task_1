import React from 'react';
import TableComponent from './TableComponent';

const Screen2 = ({ data }) => {
  const columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' },
    { field: 'gender', header: 'Gender' },
  ];

  return (
    <div>
      <TableComponent data={data} columns={columns} globalFilter={true} pagination={true} sorting={true} />
    </div>
  );
};

export default Screen2;