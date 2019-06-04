describe("My whatcanIDrink function", function() {
// A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.    
    describe("Number value tests", function() {
        
    // Specs are defined by calling the global Jasmine function it    
        it("should have a value", function() {
             // Expectations are built with the function expect which takes a value, called the actual.
             // Each matcher implements a boolean comparison between the actual value and the expected value.
             // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink coke");
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink beer");
        });
        
        it("should return drink whiskey when called as whatCanIDrink(129)", function() {
            var result = whatCanIDrink(129)
            expect(result).toBe("Drink whiskey");
        });
         it("should not return a drink when called as whatCanIDrink(131)", function() {
            var result = whatCanIDrink(131)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});