import http from "./httpServices";

const updateContact = (id, contact) => {
  return http.put(`/contacts/${id}`, contact);
};

export default updateContact;
