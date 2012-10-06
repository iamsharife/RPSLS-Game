window.ControlsView = Backbone.View.extend({

    initialize: function () {
    },

    render: function () {
        $(this.el).html(this.template( ));
        return this;
    },

    events: {
        "click #btnStartGame": "onStartGameClick",
        "click #btnNextRound": "onNextRoundClick",
        "click #btnEndGame": "onEndGameClick"
    },

    onStartGameClick:function () {
        var mode = this.model.mode;
        $("#btnStartGame").attr("disabled", "disabled");
        $(".player").show();
        $("#btnEndGame").removeAttr("disabled");
        $("#modeSelect").attr("disabled", "disabled");
        $("#playerOne .player .gestureLink").toggle( (mode == "human") );
        $("#btnNextRound").toggle( (mode == "computer") );
    },


    onNextRoundClick:function () {
        console.log("onNextRoundClick");
        this.model.simulate();
    },

    onEndGameClick: function() {
        $("#score span").text("0 - 0");
        $("#btnEndGame").attr("disabled", "disabled");
        $(".player").hide();
        $(".gestureLink").fadeTo("fast", 1);
        $("#btnStartGame").removeAttr("disabled");
        $("#modeSelect").removeAttr("disabled");
        $("#playerOneChoice, #playerTwoChoice").removeClass().addClass("gestureChoice");
    }

});