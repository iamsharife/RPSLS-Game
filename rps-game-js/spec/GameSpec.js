describe("Game", function () {

    describe("when human vs computer", function () {

        it("should indicate that mode is human", function () {
            RPS.game.setup("human");
            expect(RPS.game.getMode()).toEqual("human");
        });

        it("should generate a choice for the computer", function () {
            expect(RPS.game.play(["rock"])).not.toBeNull();
        });

    });

    describe("when computer vs computer", function () {

        it("should indicate that mode is computer", function () {
            RPS.game.setup("computer");
            expect(RPS.game.getMode()).toEqual("computer");
        });

        it("should generate a choice", function () {
            var choice = RPS.game.generateChoice();
            expect(choice).toBeDefined();
        });

        it("should generate all choices", function () {
            RPS.game.play(RPS.game.generateChoice());
            expect(RPS.game.getPlayerOne().gesture).not.toBeNull();
            expect(RPS.game.getPlayerTwo().gesture).not.toBeNull();
        });

    });

    describe("When game is played then prepared again", function(){

        beforeEach(function(){
            RPS.game.setup("computer");
            RPS.game.play(RPS.game.generateChoice());
        });

        it("should have players with last gestures", function () {
            expect(RPS.game.getPlayerOne().gesture).not.toBeNull();
            expect(RPS.game.getPlayerTwo().gesture).not.toBeNull();
        });

        it("should reset all points to 0", function (){
            RPS.game.setup("computer");
            expect(RPS.game.getPlayerOne().points).toEqual(0);
            expect(RPS.game.getPlayerTwo().points).toEqual(0);
        });

    });

});