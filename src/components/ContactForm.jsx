import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    const numberInput = e.target.value;
    const cleanedNumber = numberInput.replace(/\D/g, '').slice(0, 10);
    setNumber(cleanedNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && number) {
      onAddContact(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        required
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <Input
        type="tel"
        name="number"
        required
        placeholder="Phone number"
        value={number}
        onChange={handleNumberChange}
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

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

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
