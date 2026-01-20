const Employee = require("../models/employee.model");

const getEmployees = async (req, res) => {
    try{
         const employees = await Employee.getAllEmployees();
        res.json(employees);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
   
};
const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.getEmployeeById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addEmployee = async (req, res) => {
  try {
    const result = await Employee.createEmployee(req.body);
    res.status(201).json({
      id: result.insertId,
      ...req.body,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editEmployee = async (req, res) => {
  try {
    await Employee.updateEmployee(req.params.id, req.body);
    res.json({ message: "Employee updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const changeEmployeeStatus = async (req, res) => {
  try {
    const { status } = req.body;
    await Employee.updateEmployeeStatus(req.params.id, status);
    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeEmployee = async (req, res) => {
  try {
    await Employee.deleteEmployee(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getEmployees,
    getEmployee,
    addEmployee,
    editEmployee,
    changeEmployeeStatus,
    removeEmployee,
};