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
  res.send(JSON.stringify(books));
};

const getStudentBooks = async (req, res) => {
  const { id } = req.cookies;
  const query = `select * from ${TABLES.BOOKS} where assignedTo="${id}";`;
  const books = await executeQuery(query);
  res.send(JSON.stringify(books));
};

const addBook = async (req, res) => {
  const { name, id, assignedTo } = req.body;
  const query = `insert into ${TABLES.BOOKS} values("${id}", "${name}", "${assignedTo}")`;
  await executeQuery(query);
  res.redirect("/admin-home");
};

const assignBook = async (req, res) => {
  const { id, bookId } = req.body;
  const validateUserQuery = `select * from ${TABLES.STUDENTS} where id="${id}";`;
  const user = await executeQuery(validateUserQuery);

  if (!user.length) {
    return res.send("Student not exists");
  }

  const query = `update ${TABLES.BOOKS} set assignedTo="${id}" where id=${bookId};`;
  await executeQuery(query);
  res.redirect("/admin-home");
};

const returnBook = async (req, res) => {
  const { id } = req.body;
  const query = `update ${TABLES.BOOKS} set assignedTo="none" where id=${id};`;
  await executeQuery(query);
  res.redirect("/student-home");
};

const addStudent = async (req, res) => {
  const { id, password } = req.body;
  const query = `insert into ${TABLES.STUDENTS} values("${id}", "${password}");`;
  await executeQuery(query);
  res.redirect("/admin-home");
};

module.exports = {
  studentLogin,
  adminLogin,
  getBooks,
  getStudentBooks,
  addBook,
  assignBook,
  returnBook,
  addStudent
};
