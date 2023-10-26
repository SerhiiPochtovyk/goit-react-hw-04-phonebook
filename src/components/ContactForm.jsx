import React, { Component } from 'react';
import styled from 'styled-components';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    const numberInput = e.target.value;
    const cleanedNumber = numberInput.replace(/\D/g, '').slice(0, 10);
    this.setState({ number: cleanedNumber });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onAddContact(name, number);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={this.handleNameChange}
        />
        <Input
          type="tel"
          name="number"
          required
          placeholder="Phone number"
          value={number}
          onChange={this.handleNumberChange}
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

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
