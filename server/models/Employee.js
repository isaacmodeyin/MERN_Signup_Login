// A model in a database refers to the structure or representation of data within that database. It defines how data is organized, stored, and manipulated. Models are essential components of database systems as they provide a way to abstract and manage complex data relationships.

// In the context of databases, a schema is a structural representation of the entire database or a subset of it. It defines the organization, structure, and constraints of the data stored in the database. The schema specifies the tables, fields, data types, relationships, and constraints such as primary keys, foreign keys, indexes, and unique constraints.

const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
                              //employees table | employee schema
const EmployeeModel = mongoose.model("employees", EmployeeSchema);

module.exports = EmployeeModel;
