import { useState } from "react";
import API from "../services/api";
import "../css/CreateEmployeeModal.css";

function CreateEmployeeModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    if (photo) {
      formData.append("photo", photo);
    }

    try {
      await API.post("/employees", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onSuccess();
      onClose();
    } catch (err) {
      console.log("FULL ERROR:", err.response?.data);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Create OD Request</h3>
          <span className="close-btn" onClick={onClose}>
            ×
          </span>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              name="fullName"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contact *</label>
            <input
              name="phone"
              placeholder="Enter contact"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender *</label>
            <select name="gender" onChange={handleChange}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date of Birth *</label>
            <input type="date" name="dob" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Department *</label>
            <select name="department" onChange={handleChange}>
              <option value="">Select</option>
              <option>HR</option>
              <option>IT</option>
            </select>
          </div>

          <div className="form-group">
            <label>Designation *</label>
            <select name="designation" onChange={handleChange}>
              <option value="">Select</option>
              <option>Manager</option>
              <option>Developer</option>
            </select>
          </div>

          <div className="form-group">
            <label>Employee Photo *</label>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
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
