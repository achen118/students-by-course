'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CourseSchema = new Schema({
    id: {
        type: Number,
        required: 'course id required'
    },
    year: {
        type: Number,
        required: 'Year of course required'
    },
    course: {
        type: String,
        required: 'Name of course required'
    },
    instructor: {
        type: String,
        required: 'Instructor of course required'
    },
    students: {
        type: Number,
        required: 'Number of students in course required'
    }
});

module.exports = mongoose.model('Course', CourseSchema);