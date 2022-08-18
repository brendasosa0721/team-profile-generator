const Employee = require('./employee'); // Linking this file with the employee.

//Intern class

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }

    getSchool(){
        return this.school;

    }

    getRole(){
        return this.role;
    }
}

//Export
module.exports = Intern;