import { useState } from "react";

import DashboardHeader from "../components/DashboardHeader";
import ContactTable from "../components/ContactTable";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="dashboard">
      <h1>Contacts</h1>

      <DashboardHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showButton={false}
      />

      <ContactTable searchTerm={searchTerm} />
    </div>
  );
};

export default Contacts;