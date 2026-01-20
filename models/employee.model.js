const db = require("../config/db");

const getAllEmployees = async () => {
  const [rows] = await db.query("SELECT * FROM tbl_employee");
  return rows;
};

const getEmployeeById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM tbl_employee WHERE id = ?",
    [id]
  );
  return rows[0]; // return single record
};

const createEmployee = async (user) => {
  const { firstname,lastname, gender,department_id } = user;
  const [result] = await db.query(
    "INSERT INTO tbl_employee (firstname,lastname, gender,department_id ) VALUES (?, ?, ?, ?)",
    [firstname,lastname, gender,department_id]
  );
  return result;
};

const updateEmployee = async (id, { firstname, lastname, gender, department_id }) => {
  const [result] = await db.query(
    "UPDATE tbl_employee SET firstname = ?, lastname = ?, gender = ?, department_id = ? WHERE id = ?",
    [firstname, lastname, gender, department_id, id]
  );
  return result;
};

const updateEmployeeStatus = async (id, status) => {
  const [result] = await db.query(
    "UPDATE tbl_employee SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

const deleteEmployee = async (id) => {
  const [result] = await db.query(
    "DELETE FROM tbl_employee WHERE id = ?",
    [id]
  );
  return result;
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    updateEmployeeStatus,
    deleteEmployee,
};