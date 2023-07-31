import "./addContact.css";
import { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All the inputs are mandatory!");
      return;
    }
    addContactHandler(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <div className="addContact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="John"
          value={contact.name}
          onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="ex@gmail.com"
          value={contact.email}
          onChange={changeHandler}
        />
        <button type="submit" className="addContactBtn">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
