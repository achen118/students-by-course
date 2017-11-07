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
            year: "2015-2016",
            course: "English 1C: Applied Composition"
        };
        this.updateYear = this.updateYear.bind(this);
    }

    updateYear(year) {
        return event => this.setState({
            year: year
        });
    }

    render() {
        const { courses } = this.props;
        return (
            <div className="App">
                <header>
                    <h1>{`Students by Course ${this.state.year}`}</h1>
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
                        <h2>{this.state.course}</h2>
                        <ul className="grid-row">
                            <li>Year</li>
                            <li>Course</li>
                            <li>Instructor</li>
                            <li>Students</li>
                        </ul>
                        {
                            courses.map((course, idx) => (
                                <CourseGridItem course={ course } key={ idx } />
                            ))
                        }
                    </section>
                </div>
            </div>
        );
    }
}

export default StudentsByCourse;