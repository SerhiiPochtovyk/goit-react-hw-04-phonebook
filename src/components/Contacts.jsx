import React from 'react';
import styled from 'styled-components';

const Contacts = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name}: {contact.number}
        <DeleteButton onClick={() => onDeleteContact(contact.id)}>
          Delete
        </DeleteButton>
      </Item>
    ))}
  </List>
);

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Contacts;
