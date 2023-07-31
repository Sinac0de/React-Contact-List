import { useLocation } from "react-router-dom";

const ContactDetails = () => {
  const location = useLocation();
  const { contact } = location.state;

  return (
    <div>
      <p>Contact Name is : {contact.name}</p>
      <p>Contact Email is : {contact.email}</p>
    </div>
  );
};

export default ContactDetails;
