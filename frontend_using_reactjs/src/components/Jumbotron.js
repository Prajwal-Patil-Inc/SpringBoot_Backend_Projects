import React from "react";
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Jumbotron = (props) => {
  return (
    <Card color="light" className="text-center">
        <CardBody >
            <CardTitle><h2> Welcome to Students App</h2></CardTitle>
            <CardText>Use this app to fetch and update the table in database using springboot as backend</CardText>
        </CardBody>
    </Card>
  );
};

export default Jumbotron;
