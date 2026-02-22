import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";
import "../css/Layout.css";
import CreateEmployeeModal from "../components/CreateEmployeeModal";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, [search, department, designation, gender]);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees", {
        params: {
          search,
          department,
          designation,
          gender,
        },
      });

      setEmployees(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2>Employee Setup</h2>

          <div className="header-actions">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select onChange={(e) => setDepartment(e.target.value)}>
              <option value="">All Departments</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
            </select>

            <select onChange={(e) => setDesignation(e.target.value)}>
              <option value="">All Designation</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
            </select>

            <select onChange={(e) => setGender(e.target.value)}>
              <option value="">All Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <button className="create-btn" onClick={() => setShowModal(true)}>
              + Create
            </button>
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Age</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    <img
                      src="/Assets/no_records.svg"
                      alt="logo"
                      style={{ width: "120px", height: "120px" }}
                    />
                    <br />
                    No Records to be displayed
                  </td>
                </tr>
              ) : (
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.fullName}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.gender}</td>
                    <td>{emp.dob?.substring(0, 10)}</td>
                    <td>{emp.department}</td>
                    <td>{emp.designation}</td>
                    <td>{emp.age}</td>
                    <td>
                      <a
                        href={`http://localhost:5000/${emp.photo}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="/Assets/photo.svg"
                          alt=""
                          style={{
                            width: "25px",
                            height: "25px",
                            cursor: "pointer",
                          }}
                        />
                      </a>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button className="action-btn">
                        <img
                          src="/Assets/action.svg"
                          alt=""
                          style={{ width: "20px", height: "20px" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span>Total Records → {employees.length}</span>
          <div className="page-box">&lt; Page 1 &gt;</div>
        </div>
        {showModal && (
          <CreateEmployeeModal
            onClose={() => setShowModal(false)}
            onSuccess={fetchEmployees}
          />
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
