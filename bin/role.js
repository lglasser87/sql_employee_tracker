const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employeesDB'
});

class Role {
    
    constructor(id, title, salary, departmentID) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentID = departmentID
    }

    addRole(data) {
        connection.query(`INSERT INTO employee_role (id, title, salary, department_id)
        VALUES (${this.id}, ${JSON.stringify(this.title)}, ${this.salary}, ${this.departmentID})`,
        (err) => {
            if (err) throw err;
        })
        console.log(`${this.title} Added!`)
    }

    readRole() {
        console.log('reading role table...');
        connection.query('SELECT * FROM role', (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    }

    deleteRole(data) {
        const query = 'DELETE FROM role WHERE ?';
        connection.query(query, { id: data.id },
        (err) => {
            if(err) throw err;
        })
    }
}

module.exports = Role;