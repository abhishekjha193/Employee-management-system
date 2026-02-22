import { useState } from "react";
import API from "../services/api";

function CreateEmployeeModal({ closeModal, refreshList }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    department: "",
    designation: "",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (photo) data.append("photo", photo);

    await API.post("/employees", data);

    refreshList();
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        
        <div className="modal-header">
          <h3>Create Employee</h3>
          <span className="close-btn" onClick={closeModal}>×</span>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="modal-grid">

            <div className="form-group">
              <label>Full Name <span>*</span></label>
              <input name="fullName" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email <span>*</span></label>
              <input name="email" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Contact <span>*</span></label>
              <input name="phone" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Gender <span>*</span></label>
              <select name="gender" onChange={handleChange} required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date of Birth <span>*</span></label>
              <input type="date" name="dob" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Department <span>*</span></label>
              <select name="department" onChange={handleChange} required>
                <option value="">Select</option>
                <option>HR</option>
                <option>IT</option>
              </select>
            </div>

            <div className="form-group">
              <label>Designation <span>*</span></label>
              <select name="designation" onChange={handleChange} required>
                <option value="">Select</option>
                <option>Manager</option>
                <option>Developer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Employee Photo <span>*</span></label>
              <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
            </div>

          </div>

          <div className="modal-footer">
            <button type="submit">Save</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default CreateEmployeeModal;