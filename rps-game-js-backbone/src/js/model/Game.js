window.Game = Backbone.Model.extend({

    initialize:function () {
        this.gestures = new Gestures;
        this.playerOne = new Player({ id:"One" });
        this.playerTwo = new Player({ id:"Two", type:"computer" });
        this.setMode("human");
    },

    setMode:function (mode) {
        this.mode = mode;
        this.playerOne.set("type", mode);
        console.log("Game::setMode = " + this.mode);
    },

    generateChoice:function () {
        var gestures = this.gestures.getAll();
        var ranChoice = Math.floor(Math.random() * gestures.length);
        return gestures[ranChoice].name;
    },

    getCurrentScore:function () {
        return this.playerOne.get("points") + " - " + this.playerTwo.get("points");
    },

    play:function (choice) {
        this.playerOne.set({ gesture:choice });
        this.playerTwo.set({ gesture:this.generateChoice() });

        var playerOneGesture = this.playerOne.get("gesture");
        var playerTwoGesture = this.playerTwo.get("gesture");
        if (playerOneGesture != playerTwoGesture) {
            var winningGesture = this.gestures.getWinningGesture(playerOneGesture, playerTwoGesture);
            if (this.playerOne.gesture == winningGesture) {
                this.playerOne.set( { points : this.playerOne.get("points")+1 } );
            } else {
                this.playerTwo.set( { points : this.playerTwo.get("points")+1 } );
            }
        }
    },

    simulate:function () {
        console.log("simulate");
        this.playerOne.callSimulate(this.generateChoice());
    }

});