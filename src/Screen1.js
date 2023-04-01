import React from 'react';
import TableComponent from './TableComponent';

const Screen1 = ({ data }) => {
  const columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' },
    { field: 'gender', header: 'Gender' },
    { field: 'designation', header: 'Designation' },
    { field: 'department', header: 'Department' },
  ];

  return (
    <div>
      <TableComponent data={data} columns={columns} globalFilter={false} pagination={true} sorting={true} />
    </div>
  );
};

export default Screen1;