import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header-title"></div>
     <div className="profile-circle" onClick={logout}> <img src="/Assets/user_avatar.svg" alt="logo" /></div>
    </div>
  );
}
export default Header;

