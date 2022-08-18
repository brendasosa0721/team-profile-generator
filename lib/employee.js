//Employee role

class Employee {
    constructor(name = null , id = null , email = null) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.telephone = this.telephone
        this.role = "Employee";
    }

    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getRole(){
        return this.role
    }
    getTelephone(){
        return this.telephone
    }
}

module.exports = Employee;