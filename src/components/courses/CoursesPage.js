import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {

    componentDidMount(){
        const { courses, actions, authors } = this.props;
         
        if(courses.length === 0 ){
            actions.loadCourses().catch(err => {
                alert("Loading Courses fail" + err);
            });
        }
        
        if(authors.length === 0){
            actions.loadAuthors().catch(err => {
                alert("Loading Authors fail" + err);
            })
        }
    }

    render() {
        return (
            <>
            <h2>Courses</h2>
            <CourseList courses={this.props.courses}/>
            </>
        )
    }
}

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
}   

function mapStateToProps(state){
    // debugger;
    return {
        courses: state.authors.length === 0 
            ? [] 
            : state.courses.map(course => {
                return {
                    ...course,
                    authorName: state.authors.find(a => a.id === course.authorId).name
                }   
            }),
        authors: state.authors
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);