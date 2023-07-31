import { useId, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const handleRemoveContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <main className="App">
      <h1>Contact List App</h1>
      <section>
        <AddContact addContactHandler={addContactHandler} />
      </section>
      <section>
        <ContactList contacts={contacts} removeContact={handleRemoveContact} />
      </section>
    </main>
  );
}

export default App;
