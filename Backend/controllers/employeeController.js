const Employee = require("../models/Employee");

// create
exports.createEmployee = async (req, res) => {
  try {
    const { fullName, dob, email, phone, department, designation, gender } =
      req.body;

    if (
      !fullName ||
      !dob ||
      !email ||
      !phone ||
      !department ||
      !designation ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    //phone validation
    if (!/^\d{10}$/.test(phone)) {
      return res
        .status(400)
        .json({ message: "Phone must be exactly 10 digits" });
    }
    //Check email
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res
        .status(400)
        .json({ message: "Employee with this email already exists" });
    }

    const newEmployee = new Employee({
      fullName,
      dob,
      email,
      phone,
      department,
      designation,
      gender,
      photo: req.file ? req.file.path : "",
    });

    await newEmployee.save();

    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

//get employee
exports.getEmployees = async (req, res) => {
  try {
    const { search, department, designation, gender } = req.query;

    let query = {};

    // 🔎 Search (Name, Email, Department)
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } },
      ];
    }

    // 🎯 Filters
    if (department) query.department = department;
    if (designation) query.designation = designation;
    if (gender) query.gender = gender;

    const employees = await Employee.find(query);

    res.json({
      totalRecords: employees.length,
      data: employees,
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//delete employee
exports.softDeleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deactivated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


