import http from "./httpServices";

const getContacts = () => {
  return http.get("/contacts");
};

export default getContacts;
