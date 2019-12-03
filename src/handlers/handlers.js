const { executeQuery } = require("../utils/dbUtils");
const { TABLES, LABLES } = require("../constants/constants");

const studentLogin = async (req, res) => {
  const { id, password } = req.body;
  const query = `select * from ${TABLES.STUDENTS} where ${TABLES.STUDENTS}.id="${id}" AND ${TABLES.STUDENTS}.password="${password}";`;
  const result = await executeQuery(query);
  if (result.length) {
    res.cookie("id", id);
    return res.redirect("/student-home");
  }
  return res.send(LABLES.LOGIN_ERROR);
};

const adminLogin = async (req, res) => {
  const { id, password } = req.body;
  const query = `select * from ${TABLES.ADMIN} where ${TABLES.ADMIN}.id="${id}" AND ${TABLES.ADMIN}.password="${password}";`;
  const result = await executeQuery(query);
  if (result.length) {
    res.cookie("id", id);
    return res.redirect("/admin-home");
  }
  return res.send(LABLES.LOGIN_ERROR);
};

module.exports = { studentLogin, adminLogin };
