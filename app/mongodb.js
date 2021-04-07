const credentials = require('./credentials.js');
const mongoose = require('mongoose');
const dbUrl = `mongodb://${credentials.username}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}`;
console.log(dbUrl);

const connection = mongoose.createConnection(dbUrl);
const EmployeeSchema = require('./employeeSchemaDB.js');
const Employee = EmployeeSchema.getModel(connection);

connection.on('open', () => {
  let employee;

  employee = new Employee({
    firstName: 'John',
    lastName: 'Smith',
  });
  employee.save();

  employee = new Employee({
    firstName: 'Jane',
    lastName: 'Smith',
  });
  employee.save();

  employee = new Employee({
    firstName: 'William',
    lastName: 'Smith',
  });
  // close connection after saving objects
  employee.save((err) => {
    connection.close();
    if (err) throw err;
    console.log('Saved all three objects!');
  });
});
