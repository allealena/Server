'use strict';
var ViewCountryItem = Backbone.View.extend({
    tagName: 'li',
    template: _.template(tplListItem()),

    events: {
        'click span.like': 'likeIt',
        'click span.dislike': 'dislikeIt',
        'click span.kill': 'removeIt'
    },

    render: function () {
        var countryJSON = this.model.toJSON();
        this.$el.html(this.template(countryJSON));

        return this;
    },
    
    likeIt: function () {
        this.$el.toggleClass('likeIt');
    },

    dislikeIt: function () {
        this.$el.remove();
    },

    removeIt: function () {
        this.$el.remove();      
        this.model.destroy();
    }
});
