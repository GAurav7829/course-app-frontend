import React, { useState, useEffect } from "react";
import ViewCourse from "./ViewCourse";
import base_url from '../api/bootAPI';
import axios from 'axios';
import { toast } from "react-toastify";

const ViewCourses = () => {
    useEffect(() => {
        document.title = "All Courses";
    }, []);

    //function to call server
    const getAllCoursesFromServer = () => {

        axios.get(`${base_url}/courses`).then((response) => {
            //for success
            //console.log(response.data);
            toast.success("courses has been loaded!");
            setCourses(response.data);
        }, (error) => {
            //for error
            console.log(error);
            toast.error("Something went wrong!");
        });
    }
    //calling loading function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([]);
    const updateCourses = (id) => {
        setCourses(courses.filter((c) => (c.id !== id)))
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h1>All Courses</h1>
                <p>List of Courses are as follow:</p>
                {
                    courses.length > 0 ? courses.map((item) => <ViewCourse key={item.id} course={item} updateCourses={updateCourses} />) : "No Courses"
                }
            </div>
        </div>
    );
}

export default ViewCourses;