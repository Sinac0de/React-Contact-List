import styles from "../contactList.module.css";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Contact = ({ contact, removeContact }) => {
  const { id, name, email } = contact;

  return (
    <div key={id} className={styles.contact}>
      <Link
        to={`user/${id}`}
        state={{ contact }}
        className={styles.contactInfo}
      >
        <IconContext.Provider value={{ color: "blue", size: "50px" }}>
          <FaUserCircle />
        </IconContext.Provider>
        <div className={styles.contactInfoText}>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </Link>
      <button
        className={styles.removeContactBtn}
        onClick={() => removeContact(id)}
      >
        delete
      </button>
    </div>
  );
};

export default Contact;
