var game;

var prepareGame = function (mode) {
    return RPS.game.setup(mode);
};

var playGame = function (gestureName) {
    var playerOneChoice = $("#playerOneChoice");
    playerOneChoice.removeClass().addClass("gestureChoice").addClass(gestureName);

    var playerTwoChoice = $("#playerTwoChoice");
    var xPos = (playerTwoChoice.css("background-position") == "-20000px 0px") ? "0px 0px" : "-20000px 0px";

    playerTwoChoice.animate({ backgroundPosition : xPos }, 1000 , function() {
       playerTwoChoice.animate({ backgroundPosition : "0px 0px"}, 2000, function(){
           var gameInfo = game.play(gestureName);
           var computerGesture = game.getPlayerTwo().gesture;
           $("#score span").text(game.getCurrentScore());
           playerTwoChoice.removeAttr("style");
           playerTwoChoice.removeClass().addClass("gestureChoice").addClass(computerGesture);
       });
    });
}

$(document).ready(function () {
    game = prepareGame("human");

    $("#modeSelect").change(function () {
        var mode = $("#modeSelect").val();
        game = prepareGame(mode);
        if (mode == "human") {
            $("#playerOne .titleBox .title").text("Human");
        } else {
            $("#playerOne .titleBox .title").text("Computer");
        }
    });

    $("#btnStartGame").click(function(){
        game = prepareGame(game.getMode());
        $(this).attr("disabled", "disabled");
        $(".player").show();
        $("#btnEndGame").removeAttr("disabled");
        $("#modeSelect").attr("disabled", "disabled");
        $("#playerOne .player .gestureLink").toggle(game.getMode() == "human");
        $("#btnNextRound").toggle(game.getMode() == "computer");
    });

    $("#btnNextRound").click(function(){
        playGame(game.generateChoice());
    });

    $("#btnEndGame").click(function(){
        $("#score span").text("0 - 0");
        $(this).attr("disabled", "disabled");
        $(".player").hide();
        $(".gestureLink").fadeTo("fast", 1);
        $("#btnStartGame").removeAttr("disabled");
        $("#modeSelect").removeAttr("disabled");
        $("#playerOneChoice, #playerTwoChoice").removeClass().addClass("gestureChoice");
    });

    $(".gestureLink").click(function () {
        var that = this;

        $(".gestureLink").each(function () {
            if (this != that) {
                $(this).fadeTo('slow', 0.3);
            } else {
                $(this).fadeTo('slow', 1);
            }
        });

        var classList = $(this).find("div").attr('class').split(/\s+/);
        var gestureName;

        $.each(classList, function (index, item) {
            if (item.indexOf("Icon") != -1) {
                gestureName = item.split("Icon")[0];
            }
        });

        playGame(gestureName);
    });

});
