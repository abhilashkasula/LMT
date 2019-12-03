const { executeQuery } = require("../utils/dbUtils");
const { TABLES, LABELS } = require("../constants/constants");

const studentLogin = async (req, res) => {
  const { id, password } = req.body;
  const query = `select * from ${TABLES.STUDENTS} where ${TABLES.STUDENTS}.id="${id}" AND ${TABLES.STUDENTS}.password="${password}";`;
  const result = await executeQuery(query);
  if (result.length) {
    res.cookie("id", id);
    return res.redirect("/student-home");
  }
  return res.send(LABELS.LOGIN_ERROR);
};

const adminLogin = async (req, res) => {
  const { id, password } = req.body;
  const query = `select * from ${TABLES.ADMIN} where ${TABLES.ADMIN}.userId="${id}" AND ${TABLES.ADMIN}.password="${password}";`;
  const result = await executeQuery(query);
  if (result.length) {
    res.cookie("id", id);
    return res.redirect("/admin-home");
  }
  return res.send(LABELS.LOGIN_ERROR);
};

const getBooks = async (req, res) => {
  const query = `select * from ${TABLES.BOOKS}`;
  const books = await executeQuery(query);
  console.log(books);
  res.send(JSON.stringify(books));
};

const getStudentBooks = async (req, res) => {
  const { id } = req.cookies;
  const query = `select * from ${TABLES.BOOKS} where assignedTo="${id}";`;
  const books = await executeQuery(query);
  res.send(JSON.stringify(books));
};

module.exports = { studentLogin, adminLogin, getBooks, getStudentBooks };
