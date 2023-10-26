import React from 'react';
import styled from 'styled-components';

const Filter = ({ filter, onFilterChange }) => (
  <Input
    type="text"
    name="filter"
    value={filter}
    placeholder="Search contacts"
    onChange={onFilterChange}
  />
);

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default Filter;
