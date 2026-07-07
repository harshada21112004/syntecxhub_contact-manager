import { FaBell, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h2>Dashboard</h2>
        <p>Manage all your contacts efficiently</p>
      </div>

      <div className="nav-right">
        <FaBell className="icon" />
        <FaUserCircle className="profile" />
      </div>
    </div>
  );
};

export default Navbar;