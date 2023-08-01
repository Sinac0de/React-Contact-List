import http from "./httpServices";

const addContact = (contact) => {
  return http.post("/contacts", contact);
};

export default addContact;
