import { useEffect, useState } from "react";
import { getContacts } from "../services/contactService";

import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import ContactTable from "../components/ContactTable";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const res = await getContacts();
      setContacts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">
      <DashboardHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <StatsCards contacts={contacts} />

      <ContactTable searchTerm={searchTerm} />
    </div>
  );
};

export default Dashboard;