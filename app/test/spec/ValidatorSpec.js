describe("Validator", function() {
  var validator;

  beforeEach(function() {
    validator = new Validator();
  });
  
  it("should have a list of allowed symbols by position", function() {
     expect(validator.allowedsymbols).toEqual({first : ["£"], last : ["p"]}); 
  });
  
  it("should have a method to validate input as numeric", function() {
     expect(validator.validate_numeric).toBeDefined();
  });
  
  it("should validate input as whole numbers and floating point numbers", function() {
     expect(validator.validate_numeric("21")).toBeTruthy;
     expect(validator.validate_numeric("0.21")).toBeTruthy;
     expect(validator.validate_numeric("0.2199825783496534278")).toBeTruthy;
     expect(validator.validate_numeric("2x1")).not.toBeTruthy;
     expect(validator.validate_numeric("2x1.54787")).not.toBeTruthy;
     expect(validator.validate_numeric("21.")).toBeTruthy;
     expect(validator.validate_numeric(" ")).not.toBeTruthy;
     expect(validator.validate_numeric("£p")).not.toBeTruthy;
  });
  
  it("should have a method to detect and strip allowed symbols", function() {
     expect(validator.validate_allowedsymbols).toBeDefined();
     expect(validator.validate_allowedsymbols("£1.24p", validator.allowedsymbols)).toEqual("1.24");
     expect(validator.validate_allowedsymbols("£1@.24p", validator.allowedsymbols)).toEqual("1@.24");
     expect(validator.validate_allowedsymbols("£1.24px", validator.allowedsymbols)).toEqual("1.24px");
     expect(validator.validate_allowedsymbols("£1.24", validator.allowedsymbols)).toEqual("1.24");
     expect(validator.validate_allowedsymbols("1.24p", validator.allowedsymbols)).toEqual("1.24");
     expect(validator.validate_allowedsymbols("£p", validator.allowedsymbols)).toEqual("");
  });
  
  it("should have a method to detect floating point numbers and convert to pence", function() {
     expect(validator.validate_convertfloat).toBeDefined();
     expect(validator.validate_convertfloat("12")).toEqual(12);
     expect(validator.validate_convertfloat("1.2")).toEqual(120);
     expect(validator.validate_convertfloat("1.28454382568947534285702345")).toEqual(128);
     expect(validator.validate_convertfloat("1.28654382568947534285702345")).toEqual(129);
     expect(validator.validate_convertfloat("1.")).toEqual(100);
     expect(validator.validate_convertfloat("1.1")).toEqual(110); 
  });
  
});