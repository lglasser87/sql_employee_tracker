DROP DATABASE IF EXISTS employeeDB;

CREATE database employeeDB;

USE employeeDB;

CREATE TABLE department (
  id INT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);



CREATE TABLE employee_role (
  id INT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NOT NULL
);



CREATE TABLE employee (
  id INT AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM employee;