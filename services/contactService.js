import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getContacts = () => API.get("/contacts");
export const createContact = (contact) => API.post("/contacts", contact);
export const getContact = (id) => API.get(`/contacts/${id}`);
export const updateContact = (id, contact) =>
  API.put(`/contacts/${id}`, contact);
export const deleteContact = (id) =>
  API.delete(`/contacts/${id}`);