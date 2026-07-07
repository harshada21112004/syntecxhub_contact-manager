import {
  FaUsers,
  FaStar,
  FaUserPlus,
} from "react-icons/fa";

import "./StatsCards.css";

const StatsCards = ({ contacts }) => {
  const totalContacts = contacts.length;

  const favorites = contacts.filter(
    (contact) => contact.favorite
  ).length;

  const recentlyAdded = contacts.slice(0, 5).length;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <FaUsers className="stat-icon" />
        <h2>{totalContacts}</h2>
        <p>Total Contacts</p>
      </div>

      <div className="stat-card">
        <FaStar className="stat-icon" />
        <h2>{favorites}</h2>
        <p>Favorites</p>
      </div>

      <div className="stat-card">
        <FaUserPlus className="stat-icon" />
        <h2>{recentlyAdded}</h2>
        <p>Recently Added</p>
      </div>
    </div>
  );
};

export default StatsCards;