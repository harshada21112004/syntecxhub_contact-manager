import { useEffect, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./ContactTable.css";

import {
  getContacts,
  deleteContact,
} from "../services/contactService";

const ContactTable = ({ searchTerm = "" }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchContacts = async () => {
    try {
      const response = await getContacts();
      setContacts(response.data.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContact(id);

      alert("Contact deleted successfully!");

      fetchContacts();
    } catch (error) {
      alert(
        error.response?.data?.message || "Failed to delete contact."
      );
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Search Filter
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  if (loading) {
    return <h3>Loading Contacts...</h3>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredContacts.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No Contacts Found
              </td>
            </tr>
          ) : (
            filteredContacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>

                <td className="actions">
                  <FaEye
                    className="view"
                    onClick={() => navigate(`/contact/${contact._id}`)}
                  />

                  <FaEdit
                    className="edit"
                    onClick={() => navigate(`/edit-contact/${contact._id}`)}
                  />

                  <FaTrash
                    className="delete"
                    onClick={() => handleDelete(contact._id)}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;