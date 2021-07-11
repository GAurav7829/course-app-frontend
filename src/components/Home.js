import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = () => {
    return (<>
        <Jumbotron>
            <h1 className="display-3">Courses</h1>
            <p className="lead">This is a React Project connecting with Spring boot as backend.</p>
        </Jumbotron>
    </>);
}

export default Home;