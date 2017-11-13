import { RECEIVE_COURSES } from '../actions/coursesActions';
import merge from 'lodash/merge';

const defaultState = {
    allYears: [],
    byYear: {}
};

const coursesReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COURSES:
            const nextState = merge({}, defaultState);
            action.courses.forEach(el => {
                if (!nextState.allYears.includes(el.year)) {
                    nextState.allYears.push(el.year);
                }
                if (nextState.byYear[el.year]) {
                    if (!nextState.byYear[el.year].allNames.includes(el.course)) {
                        nextState.byYear[el.year].allNames.push(el.course);
                    }
                    if (nextState.byYear[el.year].byName[el.course]) {
                        if (!nextState.byYear[el.year].byName[el.course].allInstructors.includes(el.instructor)) {
                            nextState.byYear[el.year].byName[el.course].allInstructors.push(el.instructor);
                        }
                        if (nextState.byYear[el.year].byName[el.course].byInstructor[el.instructor]) {
                            nextState.byYear[el.year].byName[el.course].byInstructor[el.instructor].push(el);
                        } else {
                            nextState.byYear[el.year].byName[el.course].byInstructor[el.instructor] = [el];
                        }
                    } else {
                        nextState.byYear[el.year].byName[el.course] = {
                            allInstructors: [el.instructor],
                            byInstructor: {
                                [el.instructor]: [el]
                            }
                        };
                    }
                } else {
                    nextState.byYear[el.year] = {
                        allNames: [el.course],
                        byName: {
                            [el.course]: {
                                allInstructors: [],
                                byInstructor: {}
                            }
                        }
                    };
                }
            });
            return nextState;
        default:
            return state;
    }
};

export default coursesReducer;