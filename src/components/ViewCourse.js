import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from 'reactstrap';
import base_url from '../api/bootAPI';
import { Link } from 'react-router-dom';

const ViewCourse = ({ course, updateCourses }) => {
    useEffect(() => {
        document.title = "Add Course";
    }, []);
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then((response) => {
            toast.success("Data deleted successfully");
            updateCourses(id);
        }, (error) => {
            toast.error("Error. Something went wrong!!!");
        });
    }
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Link to={`/update-course/${course.id}`}><Button color="warning ml-3">Update</Button></Link>
                </Container>
            </CardBody>
        </Card>
    );
}

export default ViewCourse;