import React, { Component } from 'react';
import Chart from 'chart.js';
import CourseGridItem from './courseGridItem';

class StudentsByCourse extends Component {
    componentDidMount() {
        this.props.fetchAllCourses();
        new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [{
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2478, 5267, 734, 784, 433]
                }]
            },
            options: {}
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedYear: "2016",
            selectedCourse: "English 1C: Applied Composition"
        };
        this.updateYear = this.updateYear.bind(this);
        this.consolidateCourses = this.consolidateCourses.bind(this);
    }

    updateYear(year) {
        return event => this.setState({
            year: year
        });
    }

    consolidateCourses(e) {
        const { courses } = this.props;
        let { selectedCourse, selectedYear } = this.state;
        const consolidatedCourses = [];
        
        courses.byYear[selectedYear].byName[selectedCourse].allInstructors.forEach(instructor => {
            const coursesToConsolidate = courses.byYear[selectedYear].byName[selectedCourse].byInstructor[instructor];
            const consolidatedCourse = {
                year: selectedYear,
                course: selectedCourse,
                instructor: instructor,
                students: 0
            };
            coursesToConsolidate.forEach(course => {
                consolidatedCourse.students += course.students;
            });
            consolidatedCourses.push(consolidatedCourse);
        });
        return consolidatedCourses;
    }

    render() {
        console.log(this.props);
        const { courses } = this.props;
        const { selectedCourse, selectedYear } = this.state;
        let displayGrid;
        // Will just check for selectedCourse in future
        if (selectedCourse && courses.allYears.length > 0) {
            displayGrid = this.consolidateCourses().map((course, idx) => (
                <CourseGridItem course={ course } key={ idx } />
            ));
        }
        return (
            <div className="App">
                <header>
                    <h1>{`Students by Course ${selectedYear}`}</h1>
                </header>
                <div className="data">
                    <section className="pie-chart-container">
                        <label>Years:
                            <label>
                                <input
                                    type="radio"
                                    name="year"
                                    defaultChecked={true}
                                    onClick={this.updateYear("2015-2016")}
                                    value="All" />
                                All
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="year"
                                    onClick={this.updateYear("2015")}
                                    value="2015" />
                                2015
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="year"
                                    onClick={this.updateYear("2016")}
                                    value="2016" />
                                2016
                            </label>
                        </label>
                        <canvas id="pie-chart" width="400" height="400"></canvas>
                    </section>
                    <section className="grid-container">
                        <h2>{ selectedCourse }</h2>
                        <ul className="grid-row">
                            <li>Year</li>
                            <li>Course</li>
                            <li>Instructor</li>
                            <li>Students</li>
                        </ul>
                        { displayGrid }
                    </section>
                </div>
            </div>
        );
    }
}

export default StudentsByCourse;