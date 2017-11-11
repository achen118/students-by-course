import * as coursesAPIUtil from '../util/coursesAPIUtil';

export const RECEIVE_COURSES = "RECEIVE_COURSES";

export const receiveCourses = courses => {
    return {
        type: RECEIVE_COURSES,
        courses
    };
};

export const fetchAllCourses = () => dispatch => {
    return coursesAPIUtil.fetchAllCourses()
        .then(
            res => dispatch(receiveCourses(res.data),
            error => dispatch(console.log(error))
        ));
};