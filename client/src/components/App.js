import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import StudentsByCourseContainer from './courses/studentsByCourseContainer';
import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <StudentsByCourseContainer />
      </Provider>
    );
  }
}
