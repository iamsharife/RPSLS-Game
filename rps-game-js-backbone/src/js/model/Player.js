window.Player = Backbone.Model.extend({
    defaults: {
        type: 'human',
        points: 0,
        gesture: null
    },
    initialize: function () {

    },

    callSimulate:function (gesture) {
        this.trigger("simulate", gesture)
    }
});