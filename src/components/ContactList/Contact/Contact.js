import styles from "../contactList.module.css";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Contact = ({ contact, removeContact }) => {
  const { id, name, email } = contact;

  return (
    <div key={id} className={styles.contact}>
      <Link
        to={`contact-info/${id}`}
        state={{ contact }}
        className={styles.contactInfo}
      >
        <IconContext.Provider
          value={{ color: "rgb(124, 112, 255)", size: "45px" }}
        >
          <FaUserCircle />
        </IconContext.Provider>
        <div className={styles.contactInfoText}>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </Link>
      <div className={styles.contactBtns}>
        <Link to={`/edit-contact/${id}`} className={styles.link}>
          <button className={styles.editContactBtn}>Edit</button>
        </Link>
        <button
          className={styles.removeContactBtn}
          onClick={() => removeContact(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
