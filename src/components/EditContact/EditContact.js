import { useNavigate, useParams } from "react-router-dom";
import styles from "./editContact.module.css";
import { useEffect, useState } from "react";
import getOneContact from "../../services/getOneContact";

const EditContact = ({ editContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  //   params id
  const contactId = useParams().id;

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All the inputs are mandatory!");
      return;
    }
    editContactHandler(contact);
    // reset the state and send back to homepage
    setContact({ name: "", email: "" });
    navigate("/");
  };

  useEffect(() => {
    // get the contact info and setState
    const fetchContact = async () => {
      const { data } = await getOneContact(contactId);
      setContact({ name: data.name, email: data.email });
    };

    try {
      fetchContact();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h2>Edit the contact info</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className={styles.editContactBtn}>
          Edit Contact
        </button>
      </form>
    </>
  );
};

export default EditContact;
