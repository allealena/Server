'use strict';
var ViewCharacters = Backbone.View.extend({
    tagName: 'ul',

    render: function () {
        var characters = this.collection.getList();
        console.log(characters);
        this.creatList(characters);
        
        return this;
    },

    creatList: function (col) {
        col.forEach(function (character) {
            var characterView = new ListItemView({model: character});
            this.$el.append(characterView.render().el);
        }, this);
    }
});

