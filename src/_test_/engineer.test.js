const Engineer = require('../lib/engineer');

//Testing

describe("Enrigeer", () => {
    describe("Initialization" , () => {
        it("should initiate an object", () => {
            const obj = new Engineer();
            expect (typeof(obj)).toEquall("object");
        });
    });

    describe("Github", () => {
      it("create a new github", () => {
        const obj = new Engineer(
          "Maria",
          12,
          "maria@gmail.com",
          "brendasosa0721")
        expect(obj.github).toEqual("brendasosa0721");
      });
    });

    describe("gerGithub" , () => {
        it("return github username by github method", () {
            const obj = new Engineer("Maria" , 12 , "maria@gmail.com" , "brendasosa0721");
            expect(obj.getGithub()).toEqual("brendasosa0721");
        });
    });

    //Role 

    describe("gerRole" , () => {
        it("can return role by getRole Method" , () => {
            const role = "Engineer";
            const obj = new Engineer("Maria" , 12 , "maria@gmail.com", "brendasosa0721");
            expect(obj.getRole()).toEqual(role);
        })
    })

});