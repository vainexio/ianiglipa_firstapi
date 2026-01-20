const Students = require("../models/students.model");

const getAllStudents = async (req, res) => {
    try{
         const students = await Students.getAllStudents();
        res.json(students);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
   
};
const getStudent = async (req, res) => {
  try {
    const student = await Students.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student ID ("+req.params.id+") not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addStudent = async (req, res) => {
  try {
    const student = await Students.createStudent(req.body);
    res.status(201).json({
      id: student.insertId,
      ...req.body,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editStudent = async (req, res) => {
  try {
    const student = await Students.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student ID ("+req.params.id+") not found" });

    let result = await Students.updateStudent(req.params.id, req.body);
    res.json({ message: "Student updated successfully", result: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const changeStudentStatus = async (req, res) => {
  try {
    const student = await Students.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student ID ("+req.params.id+") not found" });

    const { status } = req.body;
    let result = await Students.updateStudentStatus(req.params.id, status);
    res.json({ message: "Status updated successfully ", result: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeStudent = async (req, res) => {
  try {
    const student = await Students.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student ID ("+req.params.id+") not found" });

    await Students.deleteStudent(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getAllStudents,
    getStudent,
    addStudent,
    editStudent,
    changeStudentStatus,
    removeStudent
};