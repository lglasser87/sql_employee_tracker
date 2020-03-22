USE employeesDB;


INSERT INTO department (id, department_name)
VALUES (900, "Managers");

INSERT INTO department (id, department_name)
VALUES (800, "Employees");



INSERT INTO employee_role (id, title, salary, department_id)
VALUES ( 910,"Manager", 100000.00, 900);

INSERT INTO employee_role (id, title, salary, department_id)
VALUES ( 810,"Employee", 90000.00, 800);





INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (911, "John", "Doe", 910, 913);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (912, "Mike", "Chan", 910, 911);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (913, "Ashley", "Rodriguez", 910, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (914, "Kevin", "Tupik", 910, 913);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (811, "Malia", "Brown", 810, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (915, "Sarah", "Lourd", 810, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (812, "Tom", "Allen", 810, 915);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (813, "Tammer", "Galal", 810, 914);

