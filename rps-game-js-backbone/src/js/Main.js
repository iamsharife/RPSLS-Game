window.Router = Backbone.Router.extend({

    routes:{
        "":"home"
    },

    initialize:function () {
        var game = this.game = new Game();
        var gameView = new GameView({ el:"#gameContainer", model:game });
        $("body").append(gameView.render().el);
    }

});

templateLoader.load(["PlayerView", "ControlsView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });