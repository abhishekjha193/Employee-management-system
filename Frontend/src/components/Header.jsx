import { useNavigate } from "react-router-dom";

function Header({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="header">

      <div className="left-header">
        <img
          src="/assets/idms_logo.svg"
          alt="Logo"
          className="header-logo"
        />
      </div>

      <div className="right-header">

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <img
          src="/assets/user_avatar.svg"
          alt="User"
          className="user-icon"
        />

      </div>

    </div>
  );
}

export default Header;