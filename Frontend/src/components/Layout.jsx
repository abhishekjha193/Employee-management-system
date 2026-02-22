import Header from "./Header";
import Sidebar from "./Sidebar";
import "../css/dashboard.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;