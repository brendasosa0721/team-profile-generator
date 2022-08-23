
const Intern = require("../lib/intern");
//testing

describe("Intern", () => {
  describe("Initialization", () => {
    it("should initiate an object", () => {
      const obj = new Intern();
      expect(typeof obj).toEqual("object");
    });
  });
  // test for school object
  describe("School", () => {
    it("should create new School", () => {
      const obj = new Intern("Brenda", 102, "brenda@mail.com", "UM");
      expect(obj.school).toEqual("UM");
    });
  });

  describe("getSchool", () => {
    it("can return school by getSchool method", () => {
      const obj = new Intern("Brenda", 102, "brenda@mail.com", "UM");
      expect(obj.getSchool()).toEqual("UM");
    });
  });
  //test for getRole 
  describe("getRole", () => {
    it("can return role by getRole method", () => {
      const role = "Intern"; //must define role
      const obj = new Intern("Brenda", 102, "brenda@mail.com", "UM");
      expect(obj.getRole()).toEqual(role);
    });
  });
});
