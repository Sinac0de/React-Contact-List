import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";
import { Route, Routes } from "react-router-dom";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <main className="App">
      <h1>Contact List App</h1>
      <Routes>
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/contact-info/:id" element={<ContactDetails />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/" element={<ContactList />} />
      </Routes>
    </main>
  );
}

export default App;
