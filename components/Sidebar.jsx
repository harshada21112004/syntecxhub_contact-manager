import {
  FaAddressBook,
  FaHome,
  FaUserPlus,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>ContactHub</h2>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/" className="nav-link">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-contact" className="nav-link">
            <FaUserPlus />
            <span>Add Contact</span>
          </NavLink>
        </li>

        <li>
          <Link to="/contacts" className="menu-link">
            <FaAddressBook />
            <span>Contacts</span>
          </Link>
        </li>

        <li>
          <Link to="/settings" className="menu-link">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;