window.PlayerView = Backbone.View.extend({

    tagName:"div",

    initialize:function () {
        console.log("PlayerView::initialise");
        this.model.bind("change", this.render, this);
    },

    render:function () {
        var playerId = this.model.get("id");
        var playerType = this.model.get("type");

        $(this.el).attr("id", "player" + playerId);
        $(this.el).addClass("playerContainer");
        $(this.el).html(this.template({ type:playerType }));

        if (playerId == "Two") {
            $(this.el).find('.player .gestureLink').remove();
        } else {
            $(this.el).find('.gestureLink').show();
        }

        return this;
    },

    events:{
        "click .gestureLink":"onGestureLinkClick"
    },

    onGestureLinkClick:function (event) {
        var that = event.currentTarget;

        $(".gestureLink").each(function () {
            if (this != that) {
                $(this).fadeTo('fast', 0.3);
            } else {
                $(this).fadeTo('slow', 1);
            }
        });

        var classList = $(that).find("div").attr('class').split(/\s+/);
        var gestureName;

        $.each(classList, function (index, item) {
            if (item.indexOf("Icon") != -1) {
                gestureName = item.split("Icon")[0];
            }
        });

        this.trigger("playGame", gestureName);
    }

});