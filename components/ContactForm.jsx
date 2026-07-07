import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  createContact,
  getContact,
  updateContact,
} from "../services/contactService";

import "./ContactForm.css";

const ContactForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  // Load contact when editing
  useEffect(() => {
    if (id) {
      fetchContact();
    }
  }, [id]);

  const fetchContact = async () => {
    try {
      const res = await getContact(id);
      setContact(res.data.data);
    } catch (error) {
      alert("Failed to load contact.");
    }
  };

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (id) {
        await updateContact(id, contact);
        alert("Contact updated successfully!");
      } else {
        await createContact(contact);
        alert("Contact created successfully!");
      }

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>{id ? "Edit Contact" : "Add New Contact"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter Full Name"
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
        </div>


        <div className="input-group">
          <label>Address</label>
          <textarea
            name="address"
            rows="3"
            value={contact.address}
            onChange={handleChange}
            placeholder="Enter Address"
          />
        </div>

        <button className="save-btn" disabled={loading}>
          {loading
            ? "Please wait..."
            : id
            ? "Update Contact"
            : "Save Contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;