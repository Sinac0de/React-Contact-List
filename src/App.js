import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { Route, Routes } from "react-router-dom";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import http from "./services/httpServices";
import deleteContact from "./services/deleteContactService";
import addContact from "./services/AddContactService";
import EditContact from "./components/EditContact/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addContact(contact);
      setContacts([...contacts, { ...contact, ...data }]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveContact = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await http.get("/contacts");
      setContacts(data);
    };

    try {
      getContacts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="App">
      <h1>Contact List App</h1>
      <Routes>
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/contact-info/:id" element={<ContactDetails />} />
        <Route
          path="/add-contact"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              removeContact={handleRemoveContact}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
