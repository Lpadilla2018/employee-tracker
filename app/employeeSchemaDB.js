const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const credentials = require('./credentials.js');
const dbUrl = `mongodb://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}`;
const EmployeeModel = 'EmployeeModel';
let connection = null;
let model = null;

mongoose.Promise = global.Promise;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
});

module.exports.getModel = () => {
  if (connection == null) {
    console.log('Creating connection and model...');
    connection = mongoose.createConnection(dbUrl);
    model = connection.model(EmployeeModel, employeeSchema);
  }
  return model;
};
