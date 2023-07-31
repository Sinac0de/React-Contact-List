import styles from "./contactList.module.css";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map((contact) => {
        const { id, name, email } = contact;
        return (
          <li key={id} className={styles.contact}>
            <p>{name}</p>
            <p>{email}</p>
            <button onClick={() => removeContact(id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
