import http from "./httpServices";

const getOneContact = (id) => {
  return http.get(`/contacts/${id}`);
};

export default getOneContact;
