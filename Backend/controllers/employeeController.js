const Employee = require("../models/Employee");

// create
exports.createEmployee = async (req, res) => {
  try {
    const { fullName, dob, email, department, phone, gender, designation } =
      req.body;

    //Backend
    if (
      !fullName ||
      !dob ||
      !email ||
      !department ||
      !phone ||
      !gender ||
      !designation
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //Email format check
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    //Phone must be 10 digits
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ message: "Phone must be 10 digits" });
    }

    const employee = new Employee({
      fullName,
      dob,
      email,
      department,
      phone,
      gender,
      designation,
      photo: req.file ? req.file.filename : "",
    });

    await employee.save();

    res.status(201).json({
      message: "Employee created successfully",
      employee,
    });
  } catch (error) {
    console.log("CREATE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

//(Search + Filter)
exports.getEmployees = async (req, res) => {
  try {
    const { search, department, designation, gender } = req.query;

    let query = {};

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } },
      ];
    }

    if (department) {
      query.department = department;
    }

    if (designation) {
      query.designation = designation;
    }

    if (gender) {
      query.gender = gender;
    }

    const employees = await Employee.find(query).sort({ createdAt: -1 });

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
