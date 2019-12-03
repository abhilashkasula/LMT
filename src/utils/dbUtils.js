const { pool } = require("./utils");

const DEFAULT_CONDITION = "1=1";

const insertQuery = async (table, data) => {
  const query = `Insert into ${table} set ?`;
  const result = await pool.query(query, data);
  return result;
};

const selectQuery = async (table, condition = DEFAULT_CONDITION) => {
  const query = `Select * from ${table} where ${condition}`;
  const result = await pool.query(query);
  return result;
};

const executeQuery = async query => {
  const result = await pool.query(query);
  return result;
};

const executeSignUpQuery = async username => {
  const query = `select * from todoUsers where username="${username}";`;
  const result = executeQuery(query);
  if (result.length) {
    return { error: true, message: "username already exists" };
  }
  return { error: false, message: "signup ok" };
};

const toggleTodoStateQuery = async todo => {
  const { time, done } = todo.todo;
  const query = `update todos set done=${!done} where time=${time}`;
  const result = await executeQuery(query);
  if (result.length) {
    return { error: false, message: `Marked as ${!done}` };
  }
  return { error: true, message: "Something went wrong!" };
};

const deleteQuery = async todo => {
  const { time } = todo;
  const query = `delete from todos where time=${time}`;
  const result = await executeQuery(query);
  if (result.length) {
    return { error: false, message: `Todo ${todo.todo} deleted` };
  }
  return { error: true, message: "Issue deleting todo!" };
};

module.exports = {
  insertQuery,
  selectQuery,
  executeQuery,
  executeSignUpQuery,
  toggleTodoStateQuery,
  deleteQuery
};
