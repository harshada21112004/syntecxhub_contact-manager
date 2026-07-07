import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import ContactDetails from "./pages/ContactDetails";
import Contacts from "./pages/Contacts";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact/:id"element={<ContactDetails />}/>
          <Route path="/edit-contact/:id" element={<EditContact />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;