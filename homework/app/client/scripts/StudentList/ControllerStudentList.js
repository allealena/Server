'use strict';
function ControllerStudentList () {
    var buttonAdd = $('.addStudent'),
        group,
        tableContent,
        studentFullInfo,
        studentEdit;

    buttonAdd.on('click', addStudent);
    group = new StudentsList();
    tableContent = new TableView({collection: group});
    createTableContent();

    function addStudent () {
        var newStudent = new Student();
        showEditStudent(newStudent);
    }
    
    function createTableContent () {
        var tableView = tableContent.render().el;
        implement('table', tableView);
    }

    function showInfoView (student) {
        var innerContainer;
        studentFullInfo = new FullInfoView({model: student});
        innerContainer = studentFullInfo.render().el;
        implement('fullInfo', innerContainer);
    }

    function showEditStudent (student) {
        var editView;
        studentEdit = new EditFormView({model: student});
        editView = studentEdit.render().el;
        implement('editForm', editView);
    }

    function implement (name, view) {
        var adress,
            location,
            coord;
        coord = {
            fullInfo: '#card',
            editForm: '#editForm',
            table: '#content'
        }
        adress = coord[name];
        location = $(adress).html(view);
    }

    mediator.sub('getStudentData', showInfoView);
    mediator.sub('editStudentData', showEditStudent);    
}
