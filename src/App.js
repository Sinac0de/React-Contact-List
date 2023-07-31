import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { Route, Routes } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const handleRemoveContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="App">
      <h1>Contact List App</h1>
      <Routes>
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
