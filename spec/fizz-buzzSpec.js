describe("My fizzbuzz game", function() {
    
    describe("returns either fizz, buzz, fizzbuzz or the number", function() {
        
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined;
        });
        it("should return fizzbuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });
        it("should return fizz when called as fizzBuzz(3)", function() {
            var result = fizzBuzz(3)
            expect(result).toBe("Fizz");
        });
        it("should return buzz when called as fizzBuzz(5)", function() {
            var result = fizzBuzz(5)
            expect(result).toBe("Buzz");
        });
        it("should return a number when called as fizzBuzz(7)", function() {
            var result = fizzBuzz(7)
            expect(result).toBe(7)
        });
    });
});