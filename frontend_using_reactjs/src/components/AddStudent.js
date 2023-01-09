import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Col, Input, FormText, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Card, CardBody } from 'reactstrap';


const AddStudents = () => {
  useEffect(()=>{
    document.title=("Add Students");
  });

const [sdata, setData] = useState({});
  
//handleform
const handleform=(e)=>{
  console.log(sdata);
  postDatatoServer(sdata);
  e.preventDefault();
}


//Fun to post data on server 
const postDatatoServer=(sdata)=>{
  axios.post(`${base_url}/my`, sdata).then(
    (response)=>{
      console.log(response);
      toast.success("Data posted successfully");
    },
    (error)=>{
      console.log(error);
      toast.error("Data post Failed")
    }
  )
}


  return (
    <Card color="light" className="text-center my-4" style={{ height: "100%" }}>
    <CardBody >
    <div style={{ paddingTop: 73 }}>
      <h1>Please enter student details</h1>
      <Form onSubmit={handleform} className="container my-4" style={{alignItems: "center"}}>
      <FormGroup row>
          <Label sm={2}>
            Student ID
          </Label>
          <Col sm={10}>
            <Input
              id="studId"
              name="sname"
              placeholder="Enter Student Id"
              type="text"
              onChange={(e)=>{
                setData({...sdata, id: e.target.value})
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>
            Student Name
          </Label>
          <Col sm={10}>
            <Input
              id="studName"
              name="sname"
              placeholder="Enter Student Name"
              type="text"
              onChange={(e)=>{
                setData({...sdata, name: e.target.value})
              }}
            />
          </Col>
        </FormGroup>
    
        <FormGroup row>
          <Label sm={2}>
            Student Description
          </Label>
          <Col sm={10}>
            <Input id="studDescr" name="text" type="textarea" placeholder="Enter Student Description"  onChange={(e)=>{
              setData({...sdata, descr: e.target.value})
            }} />
          </Col>
        </FormGroup>
        
        <Container className="text-center">
        <FormGroup check row >
          <Col 
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button type="submit" color="success">Submit</Button>
            <Button type="reset" className="mx-2" color="danger">Clear</Button>
          </Col>
        </FormGroup>
        </Container>
      </Form>
    </div>
    </CardBody>
    </Card>
  );
};

export default AddStudents;
