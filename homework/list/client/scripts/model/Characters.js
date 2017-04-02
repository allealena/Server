'use strict';
var Characters = Backbone.Collection.extend({
    model: Character,
    url: './characters',

    getList: function () {
        var list = [],
            characterJSON;

        this.forEach(function (character) {
            characterJSON = character.toJSON();
            list.push(characterJSON);
        })
        return list;
    }
});
