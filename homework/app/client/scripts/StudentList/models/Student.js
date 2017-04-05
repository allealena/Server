var Student = Backbone.Model.extend({
    defaults: {
        id:'',
        name: '',
        surname: '',
        gender: '',
        skype: '',
        birthYear: '',
        birthMonth: '',
        birthDate: '',
        birthday: '',
        personeAge: ''
    },

    initialize: function () {
        this.getBirthday();
        this.getPersoneAge();
    },

    getBirthday: function () {
        var student = this.toJSON(),
            bDay = new Date(student.birthYear, student.birthMonth-1, student.birthDate);
        this.set({birthday: bDay});
    },

    getPersoneAge: function () {
        var student = this.toJSON(),
            today = new Date(),
            monthBirth = today.getMonth() - (student.birthMonth-1),        
            age = today.getFullYear() - student.birthYear;

            if (monthBirth < 0 || (monthBirth === 0 && today.getDate() < student.birthDate)) {
                age--;
            }
        this.set({personeAge: age});
    }
});