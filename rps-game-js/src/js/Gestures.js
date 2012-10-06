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
 * The gestures object
 * @namespace
 */
RPS.gestures = function () {

    var gestures = [
        {name:'rock', beats:['scissor', 'lizard']},
        {name:'scissor', beats:['paper', 'lizard']},
        {name:'paper', beats:['rock', 'spock']},
        {name:'lizard', beats:['spock', 'paper']},
        {name:'spock', beats:['rock', 'scissor']},
    ];

    var executeGestures = function (gestureOne, gestureTwo) {
        var gesture = getGestureByName(gestureOne, gestureTwo);

        if (gesture == null)
            return null;

        var gesturesBeatsArr = gesture.beats;
        var winningGesture = false;
        for (var i = 0; i < gesturesBeatsArr.length; i++) {
            if (gesturesBeatsArr[i] == gestureTwo)
                winningGesture = gestureOne;
        }
        return winningGesture;
    };

    var getGestureByName = function (gestureName) {
        for (var i = 0; i < gestures.length; i++) {
            var gesture = gestures[i];
            if (gesture.name == gestureName)
                return gesture;
        }
        return null;
    };

    /**
     * Public interface
     * @scope RPS.gestures
     */
    return {

        /**
         * returns the possible gestures
         * @return gestures
         */
        getGestures:function () {
            return gestures;
        },

        /**
         * returns the winning gesture
         * @param choiceNameOne first choice
         * @param choiceNameTwo second choice
         * @return the winning gesture or value of false if its a draw
         */
        executeGestures:function (gestureOne, gestureTwo) {
            return executeGestures(gestureOne, gestureTwo);
        }
    };
}();
