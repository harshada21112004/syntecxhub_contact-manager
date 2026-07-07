import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./DashboardHeader.css";

const DashboardHeader = ({
  searchTerm = "",
  setSearchTerm = () => {},
  showButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-header">
      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {showButton && (
        <button
          className="add-btn"
          onClick={() => navigate("/add-contact")}
        >
          + Add Contact
        </button>
      )}
    </div>
  );
};

export default DashboardHeader;