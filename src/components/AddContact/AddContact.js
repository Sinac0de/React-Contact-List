import { Link, useNavigate } from "react-router-dom";
import styles from "./addContact.module.css";
import { useState } from "react";
import addContact from "../../services/AddContactService";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All the inputs are mandatory!");
      return;
    }
    try {
      await addContact(contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Add a new contact</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="John"
            value={contact.name}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="ex@gmail.com"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className={styles.addContactBtn}>
          Add Contact
        </button>
        <Link to="/" className={styles.cancelLink}>
          <button className={styles.cancelBtn}>Cancel</button>
        </Link>
      </form>
    </>
  );
};

export default AddContact;
