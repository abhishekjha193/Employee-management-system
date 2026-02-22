const menuItems = [
  { name: "Employee", icon: "employee" },
  { name: "Leaves", icon: "leaves" },
  { name: "Holidays", icon: "holidays" },
  { name: "Outdoor Duty", icon: "outdoor_duty" },
  { name: "Expense", icon: "expense" },
  { name: "Attendance", icon: "attendance" },
  { name: "IT Computation", icon: "it_computation" },
  { name: "Salary", icon: "salary" },
  { name: "Documents", icon: "documents" },
  { name: "Training & Dev.", icon: "training" },
  { name: "Performance", icon: "performance" },
  { name: "HR Policies", icon: "policies" },
  { name: "Reports", icon: "reports" },
  { name: "Support", icon: "support" },
];

function Sidebar() {
  return (
    <div className="sidebar">
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-item">
          <img
            src={`/Assets/${item.icon}.svg`}
            alt={item.name}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;