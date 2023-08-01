import http from "./httpServices";

const deleteContact = (id) => {
  return http.delete(`/contacts/${id}`);
};

export default deleteContact;
