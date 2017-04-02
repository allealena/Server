function tmplForm () {
	var form = '<label><input type="text" name="name" value="<%= name %>">name</label><br>'+
'<label><input type="text" name="surname" value="<%= surname %>"> surname</label><br>'+
'<label><input type="text" name="skype" value="<%= skype %>"> skype</label><br>'+
        '<button value="close" class="button_close">close</button> '+
        '<button value="save" class="button_save">save</button>';
	return form;

	/*var form = '<div class="form">\n'+
	'<label><input type="text" name="name"> name</label><br>\n' +
        '<label><input type="text" name="surname"> surname</label><br>\n' +
        '<label><input type="text" name="skype"> skype</label><br>\n'+
        '<button value="close" class="button_close">close</button> '+
        '<button value="save" class="button_save">save</button>'+
        '</div>';
	return form;*/
}


