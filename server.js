const mysql = require('mysql');
const inquirer = require('inquirer');
const table = require('console.table');
const department = require('./bin/department');
const role = require('./bin/role');
const employee = require('./bin/employee');
const sqlFind = require('./server2.js')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employeesDB'
});

const mainSelector = () => {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'Add a department, role, or employee:',
            'View a department, role, or employee:',
            'Update employee role or manager:',
            'Delete a department, role, or employee:',
            'View budget of a department:',
            'Exit:'
        ]
    }).then((res) => {
        switch (res.action) {
            case 'Add a department, role, or employee:':
                
                addSelector();
                break;
                
            case 'View a department, role, or employee:':      
                readSelector();
                break;
                
            case 'Update employee role or manager:':
                break;
                
            case 'Delete a department, role, or employee:':
                break;
                
            case 'View budget of a department:':
                break;
        
            default:
                connection.end();
                break;
        }
    })
}

connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    mainSelector();
});

const readSelector = () => {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to add?',
        choices: [
            'Department',
            'Role',
            'Employee',
            'Go back:'
        ]
    }).then((res) => {
        switch (res.action) {
            case 'Department':
                sqlFind.readTable('department');
                break;

            case 'Role':
                sqlFind.readTable('employee_role');
                break;

            case 'Employee':
                sqlFind.readTable('employee');
                break;

            default:
                mainSelector();
        }
    }).then((res) => {
        sqlFind.continueOrExit();
    }).catch (err => {
        console.log(err);
        
    })
}

const addSelector = () => {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to add?',
        choices: [
            'Department',
            'Role',
            'Employee',
            'Go back:'
        ]
    }).then((res) => {
        switch (res.action) {
            case 'Department':
                sqlFind.departmentAdd();
                break;
        
            case 'Role':
                sqlFind.roleAdd();
                break;
        
            case 'Employee':
                addEmployee();                
                break;
        
            default:
                sqlFind.continueOrExit();
                break;
        }
    })
}

const addEmployee = () => {
    const roleChoose = [];
    const managerChoose = [];

    sqlFind.getroleChoose(roleChoose);

    sqlFind.getmanagerChoose(managerChoose);

    inquirer.prompt([{
        name: 'firstName',
        message: "What is your new employee's first name?"
    }, {
        name: 'lastName',
        message: "What is your new employee's last name?"
    }, {
        type: 'list',
        name: 'role',
        message: "What is your new employee's role?",
        choices: roleChoose
    }, {
        type: 'list',
        name: 'manager',
        message: "Who is your new employee's manager?",
        choices: managerChoose
    }
    ]).then((action) => {
        let managerID;
        action.manager === 'Employee will not be assigned a manager' ? managerID = "NULL" : managerID = JSON.parse(action.role);
        newEmp = new Employee(action.firstName, action.lastName, JSON.parse(action.role), managerID);
        newEmp.addEmployee();
        if (newEmp) console.log(newEmp);
    }).then(() => {
        sqlFind.continueOrExit();
    }).catch((err) => {
        console.log(err);
    })
}

