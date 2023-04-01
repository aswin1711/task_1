import React, { useState } from 'react';

const TableComponent = ({ data, columns, globalFilter, sorting, pagination }) => {
  const [tableData, setTableData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredResults = tableData.filter((row) => {
      return Object.keys(row).some((key) => {
        const value = row[key].toString().toLowerCase();
        return value.includes(keyword);
      });
    });
    setFilteredData(filteredResults);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handlePagination = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getSortedData = () => {
    if (!sortConfig) {
      return filteredData;
    }
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortedData;
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return getSortedData().slice(startIndex, endIndex);
  };

  const getTableHeaders = () => {
    return columns.map((column) => (
      <th key={column.field} onClick={() => sorting && handleSort(column.field)}>
        {column.header}
        {sorting && sortConfig && sortConfig.key === column.field && (
          <span>{sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}</span>
        )}
      </th>
    ));
  };

  const getTableData = () => {
    const data = getPaginatedData();
    return data.map((row) => {
      return (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.field}>{row[column.field]}</td>
          ))}
        </tr>
      );
    });
  };

  const getPageNumbers = () => {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div>
      {globalFilter && (
        <div>
          <input type="text" placeholder="Search..." onChange={handleFilter} />
        </div>
      )}
      <table>
        <thead>
          <tr>{getTableHeaders()}</tr>
        </thead>
        <tbody>{getTableData()}</tbody>
      </table>
      {pagination && (
        <div>
          <select value={rowsPerPage} onChange={handleRowsPerPage}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <ul className="pagination">
            {getPageNumbers().map((number) => (
              <li key={number} id={number} onClick={handlePagination}>
                {number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TableComponent;