const Employee = require('./employee');

//Manager class

class Manager extends Employee {
    constructor(name, id , email , officeNumber) {
        super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
}

getOfficeNumber(){
    return this.officeNumber
}

getRole() {
    return this.role
}

}

//Exports

module.exports = Manager;