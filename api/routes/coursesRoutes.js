'use strict';
module.exports = function (app) {
    var courses = require('../controllers/coursesController');

    // todoList Routes
    app.route('/courses')
        .get(courses.list_all_courses)
        .post(courses.create_a_course);


    app.route('/courses/:courseId')
        .get(courses.read_a_course)
        .put(courses.update_a_course);
};