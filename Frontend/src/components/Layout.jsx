import Sidebar from "./Sidebar";
import Header from "./Header";
import '../css/Layout.css'

function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout