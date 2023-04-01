import React, { useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const ParentComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 28, gender: 'Male', designation: 'Developer', department: 'IT' },
    { id: 2, name: 'Jane', age: 34, gender: 'Female', designation: 'Manager', department: 'HR' },
    { id: 3, name: 'Bob', age: 25, gender: 'Male', designation: 'Designer', department: 'Creative' },
    { id: 4, name: 'Alice', age: 31, gender: 'Female', designation: 'Developer', department: 'IT' },
    { id: 5, name: 'Mark', age: 40, gender: 'Male', designation: 'Manager', department: 'Sales' },
    { id: 6, name: 'Lisa', age: 27, gender: 'Female', designation: 'Developer', department: 'IT' },
  ]);

  return (
    <div>
      <h1>Screen 1</h1>
      <Screen1 data={data} />
      <h1>Screen 2</h1>
      <Screen2 data={data} />
    </div>
  );
};

export default ParentComponent;