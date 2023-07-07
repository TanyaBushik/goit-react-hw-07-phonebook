import { useEffect } from 'react';
import { useContacts } from 'hooks/useContacts';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Title, SubTitle, MessageEmptyList } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const App = () => {
  const { contacts, fetchContacts } = useContacts();

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {!!contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <MessageEmptyList>
          Unfortunately, there is no contact here. Please enter your first
          contact
        </MessageEmptyList>
      )}
    </Container>
  );
};
