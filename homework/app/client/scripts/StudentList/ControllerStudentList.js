'use strict';
function ControllerStudentList () {
    var group,
        tableContent,
        studentFullInfo,
        studentEdit;

    group = new StudentsList();
    tableContent = new TableView({collection: group});
    createTableContent();
    
    function createTableContent () {
        var tableView = tableContent.render();
        implement('table', tableView.el);
    }

    function showInfoView (student) {
        var innerContainer;
        studentFullInfo = new FullInfoView({model: student});
        innerContainer = studentFullInfo.render();
        implement('fullInfo', innerContainer.el);
    }

    function showEditStudent (student) {
        var editView;
        studentEdit = new EditFormView({model: student});
        editView = studentEdit.render();
        implement('editForm', editView.el);
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
