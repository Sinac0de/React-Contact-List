import styles from "./contactList.module.css";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => {
        const { id, name, email } = contact;
        return (
          <li key={id} className={styles.contact}>
            <div className={styles.contactInfo}>
              <IconContext.Provider value={{ color: "blue", size: "50px" }}>
                <FaUserCircle />
              </IconContext.Provider>
              <div className={styles.contactInfoText}>
                <p>{name}</p>
                <p>{email}</p>
              </div>
            </div>
            <button
              className={styles.removeContactBtn}
              onClick={() => removeContact(id)}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
