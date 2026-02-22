import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";
import CreateEmployeeModal from "../components/CreateEmployeeModal";
import "../css/dashboard.css";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const fetchEmployees = async () => {
    try {
      const res = await API.get(`/employees?search=${search}`);
      setEmployees(res.data);
    } catch (err) {
      console.log("Error fetching employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [search]);

  return (
    <Layout>
      <div className="section-header">
        <h2>Employee Setup</h2>
      </div>

      <div className="top-actions">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="create-btn" onClick={() => setShowModal(true)}>
          + Create
        </button>
      </div>

      <div className="table-wrapper">
        {employees.length === 0 ? (
          <div className="empty-area">
            <img src="/assets/no_records.png" alt="no data" />
            <p>No Records to be displayed</p>
          </div>
        ) : (
          <table className="employee-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp.fullName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.gender}</td>
                  <td>{new Date(emp.dob).toLocaleDateString()}</td>
                  <td>{emp.department}</td>
                  <td>{emp.designation}</td>

                  <td>
                    <img
                      src="/assets/photo.svg"
                      alt="clip"
                      className="photo-icon"
                    />
                  </td>

                  <td>
                    <img
                      src="/assets/action.svg"
                      alt="action"
                      className="action-icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="pagination-bar">
        <div>Total Records - {employees.length}</div>
        <div className="page-controls">
          &lt; Page 1 &gt;
        </div>
      </div>

      {showModal && (
        <CreateEmployeeModal
          closeModal={() => setShowModal(false)}
          refreshList={fetchEmployees}
        />
      )}
    </Layout>
  );
}

export default Dashboard;