import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <Contacts />
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default App;
