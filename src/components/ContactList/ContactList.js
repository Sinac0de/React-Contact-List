import styles from "./contactList.module.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <section>
      {/* header */}
      <div className={styles.listHeader}>
        <h2>Contacts</h2>
        <Link to="/add-contact">
          <button className={styles.addContactBtn}>Add a new contact</button>
        </Link>
      </div>
      {/* contact list */}
      <div className={styles.contactList}>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              removeContact={removeContact}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ContactList;
