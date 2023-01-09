import { React, useEffect } from "react";
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Home =()=>{
    useEffect(()=>{
        document.title=("Home");
      });
    return(
        <Card color="light" className="text-center my-4" style={{ height: "100%" }}>
        <CardBody >
            <CardTitle><h2> Welcome to Students App</h2></CardTitle>
            <CardText className="my-5">Use this app to fetch and update the table in database using springboot as backend. <br /> 
             Please click on View Students to view the data of all Students. <br />
             Click on Add Student to add a new record for a new Student </CardText>
        </CardBody>
    </Card>
    );
}

export default Home;