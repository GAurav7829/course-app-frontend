import React from 'react';
import Menubar from './Menubar';
import { Route } from 'react-router-dom';
import Home from './Home';
import AddCourse from './AddCourse';
import ViewCourses from './ViewCourses';

class Courses extends React.Component {
    render() {
        return <>
            <Menubar />
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={AddCourse} exact />
            <Route path="/view-courses" component={ViewCourses} exact />
            <Route path="/update-course/:id" component={AddCourse} exact />
        </>
    }
}

export default Courses;