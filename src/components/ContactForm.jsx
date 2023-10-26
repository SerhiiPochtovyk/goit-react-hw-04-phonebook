import React from 'react';
import styled from 'styled-components';

const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onAddContact,
}) => (
  <Form>
    <Input
      type="text"
      name="name"
      required
      placeholder="Name"
      value={name}
      onChange={onNameChange}
    />
    <Input
      type="tel"
      name="number"
      required
      placeholder="Phone number"
      value={number}
      onChange={onNumberChange}
    />
    <Button type="button" onClick={onAddContact}>
      Add Contact
    </Button>
  </Form>
);

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default ContactForm;
