//Employee role

class Employee {
    constructor(name , id , email, telephone) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.telephone = telephone;
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