const Employee = require('../lib/employee');

// Initialize testing

describe("Employee", () => {
    describe("Initialization" , () => {
        it("should initiate an object", () => {
            const obj = new Employee();
            expect (typeof(obj)).toEquall("object");
        });
    });

//test for name object

describe("Name", () => {
it("should create a new name", () => {
    const obj = new Employee("Maria");
    expect("obj.name").toEqual("Maria");

});
});

// test id object

describe("id", () => {
    it("should create a new id" , () => {
        const obj = new Employee("Maria", 12);
        expect("obj.id").toEqual("12");

    });
});

//test email object

describe("getEmail", () => {
  it("should create a new email", () => {
    const obj = new Employee("Maria", 12,  "maria@gmail.com");
    expect("obj.getEmail").toEqual("maria@gmail.com");
  });
});

//test telephone object

describe("getTelephone", () => {
    it("should create a new telephone" , () => {
        const obj = new Employee("Maria", 12,  305);
        expect("obj.getTelephone").toEqual("305");

    });
});

// test role
describe("getRole", () => {
    it("return role", () =>{
    const role = "Employee";
    const obj = new Employee("Maria" , 12 , 305 , "maria@gmail.com");
    expect(obj.getRole()).toEqual(role);
    });
});