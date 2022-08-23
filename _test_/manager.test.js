
const Manager = require('../lib/manager');

//testing

describe("Manager", () => {
    describe("Initialization", () => {
        it("should initiate an object", () => {
            const obj = new Manager();
            expect(typeof(obj)).toEqual("object");
        });
    });
     // test for school object
    describe("officeNumber", () => {
        it("should create new officeNumber", () => {
          const obj = new Manager("Bob", 1, "Bob@mail.com", 512);
          expect(obj.officeNumber).toEqual(512);
        });
      })
    describe("getOfficeNumber", () => {
        it("can return school by getOfficeNumber method", () => {
          const obj = new Manager("Bob", 1, "Bob@mail.com", 512);
          expect(obj.getOfficeNumber()).toEqual(512);
        });
      });
      // getRole method
    describe("getRole", () => {
        it("can return role by getRole method", () => {
          const role = "Manager";//must define role
          const obj = new Manager("Bob", 1, "Bob@mail.com", 512);
          expect(obj.getRole()).toEqual(role);
        });
      });
});