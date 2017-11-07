import React, { Component } from 'react';

export default class CourseGridItem extends Component {
    render() {
        const { course } = this.props;
        return (
            <ul className="grid-row">
                <li>
                    { course.year }
                </li>
                <li>
                    { course.course }
                </li>
                <li>
                    { course.instructor }
                </li>
                <li>
                    { course.students }
                </li>
            </ul>
        );
    }
}