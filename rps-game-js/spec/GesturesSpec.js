describe("Gestures", function() {

    var runExpect = function(playerOneGesture, playerTwoGesture, expectedWinner) {
        var playerOne = {lastGesture:playerOneGesture};
        var playerTwo = {lastGesture:playerTwoGesture};
        var winner = (expectedWinner == 1) ? playerOne : playerTwo;
        var roundInfo = RPS.gestures.executeGestures(playerOneGesture, playerTwoGesture);
        expect(RPS.gestures.executeGestures(playerOneGesture, playerTwoGesture)).toEqual(expectedWinner);
    };

  it("The 'Rock' gesture beats the 'Scissor' gesture", function() {
      runExpect('rock', 'scissor', 'rock');
  });

  it("The 'Rock' gesture beats the 'Lizard' gesture", function() {
      runExpect('rock', 'lizard', 'rock');
  });

  it("The 'Scissor' gesture beats the 'Paper' gesture", function() {
      runExpect('scissor', 'paper', 'scissor');
  });

  it("The 'Scissor' gesture beats the 'Lizard' gesture", function() {
      runExpect('scissor', 'lizard', 'scissor');
  });

  it("The 'Paper' gesture beats the 'Rock' gesture", function() {
      runExpect('paper', 'rock', 'paper');
  });

  it("The 'Paper' Paper beats the 'Spock' gesture", function() {
      runExpect('paper', 'spock', 'paper');
  });

  it("The 'Spock' gesture beats the 'Rock' gesture", function() {
      runExpect('spock', 'rock', 'spock');
  });

  it("The 'Spock' gesture beats the 'Scissor' gesture", function() {
      runExpect('spock', 'scissor', 'spock');
  });

    describe("given the same gesture", function() {

        it ("should draw with both gestures being the same, will return false", function() {
            runExpect('rock', 'rock', false);
            runExpect('paper', 'paper', false);
            runExpect('scissor', 'scissor', false);
            runExpect('lizard', 'lizard', false);
            runExpect('spock', 'spock', false);
        });

    });
});
