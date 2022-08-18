// Initialize testing

describe("Employee", () =>{
    //should return empty string
    it("should initiate an object", () => {
        const obj = new Employee();
        expect(typeof(obj)). toEqual("object");
    });
});

