const express = require("express");

const router = express.Router();

const {
    getAllStudents,
    getStudent,
    addStudent,
    editStudent,
    changeStudentStatus,
    removeStudent,
} = require("../controllers/students.controller");

router.get('/',getAllStudents);
router.get('/:id',getStudent);
router.post('/',addStudent);
router.put('/:id',editStudent);
router.patch('/:id/status',changeStudentStatus);
router.delete('/:id',removeStudent);

module.exports = router;