import styles from "./contactList.module.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import deleteContact from "../../services/deleteContactService";
import http from "../../services/httpServices";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await http.get("/contacts");
      setContacts(data);
      setAllContacts(data);
    };

    try {
      getContacts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRemoveContact = async (id) => {
    try {
      await deleteContact(id);
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filterContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filterContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <section>
      {/* header */}
      <div className={styles.listHeader}>
        <h2>Contacts</h2>
        <Link to="/add-contact">
          <button className={styles.addContactBtn}>Add a new contact</button>
        </Link>
      </div>
      <form role="search" className={styles.searchBarContainer}>
        <input
          type="search"
          placeholder="Search contacts..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      {/* contact list */}
      <div className={styles.contactList}>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                removeContact={handleRemoveContact}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
