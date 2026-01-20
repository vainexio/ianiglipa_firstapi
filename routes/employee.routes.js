const express = require("express");

const router = express.Router();

const {
    getEmployees,
    getEmployee,
    addEmployee,
    editEmployee,
    changeEmployeeStatus,
    removeEmployee,
} = require("../controllers/employee.controller");

router.get('/',getEmployees);
router.get('/:id',getEmployee);
router.post('/',addEmployee);
router.put('/:id',editEmployee);
router.patch('/:id/status',changeEmployeeStatus);
router.delete('/:id',removeEmployee);

module.exports = router;