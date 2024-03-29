import { useNavigate, useParams } from "react-router-dom";
import styles from "./editContact.module.css";
import { useEffect, useState } from "react";
import getOneContact from "../../services/getOneContact";
import updateContact from "../../services/updateContact";
import { Link } from "react-router-dom";

const EditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  //   params id
  const contactId = useParams().id;

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All the inputs are mandatory!");
      return;
    }
    //put the data to the database
    try {
      await updateContact(contactId, contact);

      // reset the state and send back to homepage
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
        <button type="submit" className={styles.editContactBtn}>
          Edit Contact
        </button>
        <Link to="/" className={styles.cancelLink}>
          <button className={styles.cancelBtn}>Cancel</button>
        </Link>
      </form>
    </>
  );
};

export default EditContact;
