import { connect } from 'react-redux';
import StudentsByCourse from './studentsByCourse';
import { fetchAllCourses } from '../../actions/coursesActions';

const mapStateToProps = state => {
    return {
        courses: state.courses
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCourses: () => dispatch(fetchAllCourses())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentsByCourse);