var mediator = new Mediator();

window.addEventListener('load', appList, false);

function appList () {
	var characters = new Characters(),
	    btnLoad = $('button.load'),
	    characterEdit,
	    viewCharacters;

	function showList () {
		var container = $('div.characters'),
		    list;
        
        viewCharacters = new ViewCharacters({collection: characters}),
	    list = viewCharacters.render().el;
	    container.html(list);
	}
	
	function loadData () {
		characters.fetch();
	    characters.on('sync', showList);
	}

	function showEdit (character) {
		var containerEdit = $('div.edit'),
		    editView;

		characterEdit = new EditFormView({model: character});
		editView = characterEdit.render().el;
		containerEdit.html(editView);
	}

	btnLoad.on('click', loadData);

	mediator.sub('editCharacterData', showEdit);  
}
