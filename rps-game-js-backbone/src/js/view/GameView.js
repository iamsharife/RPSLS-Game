window.GameView = Backbone.View.extend({

    tagName:"div",

    initialize: function () {
        this.model.bind("simulate", this.playGame);
    },

    render: function () {
        var game = this.model;

        this.playerOneView = new PlayerView({ model:game.playerOne, elId:"playerOne" });
        this.playerOneView.on("playGame", this.playGame, this);
        this.controlsView = new ControlsView({ model: game });
        this.playerTwoView = new PlayerView({ model:game.playerTwo, elId:"playerTwo"  });

        var playerOneViewEl = $(this.playerOneView.render().el);
        playerOneViewEl.addClass("floatLeft")
        $(this.el).html(playerOneViewEl);

        $(this.el).append(this.controlsView.render().el);

        var playerTwoViewEl = $(this.playerTwoView.render().el);
        playerTwoViewEl.addClass("floatRight")
        $(this.el).append(playerTwoViewEl);
        return this;
    },

    events: {
        "change #modeSelect": "onModeSelect"
    },

    onModeSelect:function () {
        var mode = $("#modeSelect").val();
        var game = this.model;
        game.setMode(mode);
    },

    playGame:function (gestureName) {
        var game = this.model;
        $("#playerOne .gestureChoice").removeClass().addClass("gestureChoice").addClass(gestureName);

        var playerTwoGestureChoice = $("#playerTwo .gestureChoice");
        var xPos = (playerTwoGestureChoice.css("background-position") == "-20000px 0px") ? "0px 0px" : "-20000px 0px";

        playerTwoGestureChoice.animate({ backgroundPosition:xPos }, 1000, function () {
            playerTwoGestureChoice.animate({ backgroundPosition:"0px 0px"}, 2000, function () {
                console.log(game);
                var gameInfo = game.play(gestureName);
                var computerGesture = game.playerTwo.gesture;
                $("#score span").text(game.getCurrentScore());
                playerTwoGestureChoice.removeAttr("style");
                playerTwoGestureChoice.removeClass().addClass("gestureChoice").addClass(computerGesture);
            });
        });
    }

});