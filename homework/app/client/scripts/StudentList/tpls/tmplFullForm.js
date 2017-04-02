function tmplFullForm () {
    var studentInfo ='<table><thead>\n' +
        '<tr><th>Name</th><th>Surname</th><th>Age</th><th>Gender</th><th>Skype</th></tr>\n' +
        '</thead>\n' +
'<tr><td><%= name %></td> <td><%= surname %></td><td><%= personeAge %></td><td><%= gender %></td><td><%= skype %></td></tr>'+
'</table>'+
'<button class="closeFullForm">close</button>';
    return studentInfo;

    /* var studentInfo ='<table>\n' +
        '<thead>\n' +
        '<tr><th>Name</th><th>Surname</th><th>Age</th><th>Gender</th><th>Skype</th></tr>\n' +
        '</thead>\n' +
        '<tr><td>name:</td><td>surname:</td><td>age:</td><td>gender:</td><td>skype:</td></tr>\n' +
        '</table>' +
        '<button class="closeFullForm">close</button>';
    return studentInfo;*/
}
