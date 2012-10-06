window.Gestures = Backbone.Model.extend({

    initialize: function () {
        this.gestures =  [
            {name:'rock', beats:['scissor', 'lizard']},
            {name:'scissor', beats:['paper', 'lizard']},
            {name:'paper', beats:['rock', 'spock']},
            {name:'lizard', beats:['spock', 'paper']},
            {name:'spock', beats:['rock', 'scissor']},
        ];
    },

    getAll: function () {
        return this.gestures;
    },

    getWinningGesture: function (gestureOne, gestureTwo) {
        var gesture = this.getGestureByName(gestureOne, gestureTwo);

        if (gesture == null)
            return null;

        var gesturesBeatsArr = gesture.beats;
        var winningGesture = false;
        for (var i = 0; i < gesturesBeatsArr.length; i++) {
            if (gesturesBeatsArr[i] == gestureTwo)
                winningGesture = gestureOne;
        }
        return winningGesture;
    },

    getGestureByName: function (gestureName) {
        for (var i = 0; i < this.gestures.length; i++) {
            var gesture = this.gestures[i];
            if (gesture.name == gestureName)
                return gesture;
        }
        return null;
    }

});