/**
 * @fileOverview Rock-Paper-Scissors Game
 * @version 1.0
 */


/**
 * RPS package declaration.
 * This declaration makes sure to not erase the
 * current declaration. If the package does not
 * exist an empty object is created.
 * @default {}
 */
var RPS = RPS || {};

/**
 * The game object
 * @namespace
 */
RPS.game = function () {

    var _mode = "human";

    var playerOne = { name:"playerOne", points:0, gesture: null };
    var playerTwo = { name:"playerTwo", points:0, gesture: null };

    var generateChoice = function () {
        var gestures = RPS.gestures.getGestures();
        var ranChoice = Math.floor(Math.random() * gestures.length);
        return gestures[ranChoice].name;
    };

    /**
     * Public interface
     * @scope RPS.game
     */
    return {

        /**
         * setup the game based on the mode passed in
         * @param the mode the user wishes to play
         * @return Game
         */
        setup:function (mode) {
            _mode = mode;
            playerOne = { name:"playerOne", points:0, gesture: null };
            playerTwo = { name:"playerTwo", points:0, gesture: null };
            return this;
        },

        /**
         * Whether the current game mode is human vs computer
         * or computer vs computer
         * @return String
         */
        getMode:function () {
            return _mode;
        },

        /**
         * generates a gesture randomly
         * @return Gesture
         */
        generateChoice:function () {
            return generateChoice();
        },

        /**
         * returns the points of both players concatenated
         * @return String
         */
        getCurrentScore:function () {
          return playerOne.points + " - " + playerTwo.points;
        },

        /**
         * access to player one
         * @return player one
         */
        getPlayerOne:function () {
           return playerOne;
        },

        /**
         * access to player two
         * @return player two
         */
        getPlayerTwo:function () {
            return playerTwo;
        },

        /**
         * returns the winner
         * @param choices an array of choices made
         * @return the winning gesture
         */
        play:function (choice) {
            playerOne.gesture = choice;
            playerTwo.gesture = generateChoice();

            if (playerOne.gesture != playerTwo.gesture) {
                var winningGesture = RPS.gestures.executeGestures(playerOne.gesture, playerTwo.gesture);
                (playerOne.gesture == winningGesture) ? playerOne.points++ : playerTwo.points++;
            }
        }
    };
}();
