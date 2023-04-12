import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
// import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleInputNameChange = (evt) => {};

  render() {
    const contacts = this.state.contacts;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm/>
        </Section>

        <Section title="Contacts">
          <ContactList contacts={contacts} />
        </Section>
      </>
    );
  }
}
export default App;
