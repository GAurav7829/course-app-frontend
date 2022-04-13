import React, { useState, useEffect } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import base_url from '../api/bootAPI';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';

const AddCourse = () => {
    const [state, setState] = useState({
        id: '',
        title: '',
        description: ''
    });
    const { id } = useParams();

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    useEffect(() => {
        if (id) {
            axios.get(`${base_url}/courses/${id}`)
                .then(response => {
                    console.log(response.data);
                    toast.success("Course fetched Successfully");
                    setState({
                        //id: response.data.id,
                        title: response.data.title,
                        description: response.data.description
                    })
                })
                .catch(error => {
                    console.log(error);
                    toast.error("Something Went Wrong!!!");
                });
        }
    }, [id]);


    const changeForm = (e) => {
        const newState = JSON.parse(JSON.stringify(state));
        switch (e.target.name) {
            case 'id':
                newState.id = e.target.value;
                break;
            case 'title':
                newState.title = e.target.value;
                break;
            case 'description':
                newState.description = e.target.value;
                break;
            default:
        }
        setState(newState);
    }
    const handleForm = (e) => {
        e.preventDefault();
        console.log(state);
        if (id) {
            axios.put(`${base_url}/courses`, state)
                .then((response) => {
                    console.log(response);
                    toast.success("Course Updated Successfully");
                }).catch((error) => {
                    console.log(error);
                    toast.error("Something Went Wrong!!!");
                });
        } else {
            axios.post(`${base_url}/courses`, state)
                .then((response) => {
                    console.log(response);
                    toast.success("Course Saved Successfully");
                }).catch((error) => {
                    console.log(error);
                    toast.error("Something Went Wrong!!!");
                });
        }
    }
    return (<div className="row text-center justify-content-center ">
        <h4>Add Course</h4>
        <Form onSubmit={handleForm} className='col-md-6'>
            {/* <FormGroup>
                <Label for="id">Course Id</Label>
                <Input type="text" name="id" id="id" placeholder="Enter Here" value={state.id} onChange={changeForm} disabled={id ? true : false} />
            </FormGroup> */}
            <FormGroup>
                <Label for="title">Course Title</Label>
                <Input type="text" name="title" id="title" placeholder="Enter Here" value={state.title} onChange={changeForm} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Course Description</Label>
                <Input type="textarea" name="description" id="description" value={state.description} onChange={changeForm} />
            </FormGroup>
            <Container className="text-center mt-3">
                <Button type="submit" color="success">{id ? 'Update Course' : 'Add Course'}</Button>
                <Button color="warning ml-3" type="reset" >Clear</Button>
            </Container>
        </Form>
    </div>);
}
export default AddCourse;