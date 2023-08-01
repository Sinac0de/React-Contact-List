import axios from "axios";
import http from "./httpServices";

const postContact = (contact) => {
  return http.post("/contacts", contact);
};

export default postContact;
