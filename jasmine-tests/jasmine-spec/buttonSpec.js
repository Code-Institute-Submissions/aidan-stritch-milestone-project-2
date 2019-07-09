describe("buttonClicking", function() {
    describe("initial value before any buttons clicked should be 'none'", function() {
        it("should return true", function() {
            expect(document.getElementById('textCity').innerHTML).toBe("None");
        });


    });
});
    describe("initial value before any buttons clicked should be 'none'", function() {

            it("should not procede with the code unless the options for city and type have been selected"),
                function() {
                    $("#showResults").click(function() {
                        expect(document.getElementById('textCity').innerHTML).toNotBe("None");
                    })

                });
});
