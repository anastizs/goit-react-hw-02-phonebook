import React, { Component } from "react";
import Notiflix from "notiflix";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (newContact) => {
    const isExists = this.state.contacts.some(
      (contact) => contact.name === newContact.name
    );
    if (isExists) {
      return Notiflix.Notify.warning(
        "Enter correct information",
        `${newContact.name} is already in contacts`,
        "Ok"
      );
    }
    this.setState(({ contacts }) => {
      return { contacts: [newContact, ...contacts] };
    });
  };
  deleteHandler = (contactId) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter((contact) => contact.id !== contactId),
      };
    });
  };
  filterHandler = (e) => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    const filter = this.state.filter.toLowerCase();
    const contacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterHandler} />
          <ContactList contacts={contacts} onDelete={this.deleteHandler} />
        </Section>
      </>
    );
  }
}
export default App;
