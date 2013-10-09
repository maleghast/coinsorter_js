describe("Validator", function() {
  var validator;

  beforeEach(function() {
    validator = new Validator();
  });
  
  it("should have a method to validate input", function() {
     expect(validator.validate).toBeDefined(); 
  });
  
});