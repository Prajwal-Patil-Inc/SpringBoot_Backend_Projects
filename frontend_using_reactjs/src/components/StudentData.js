import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import{
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container,
} from "reactstrap";
import base_url from "../api/bootapi";

const StudentData=({ sdata, update })=>{

const deleteStudentData=(id)=>{
    axios.delete(`${base_url}/my/${id}`).then(
        (response)=>{
            toast.success("Student data deleted successfully");
            update(id);
        },
        (error)=>{
            toast.error("Delete failed");
        }
    )
}

return(
    <Card>
        <CardBody className="text-center">
            <CardTitle className="fw-bold">Student ID: {sdata.id}<br/>{sdata.name}</CardTitle>
            <CardText>{sdata.descr}</CardText>
            <Container> 
                <Button color="danger" className="center mx-3" onClick={()=>{
                    deleteStudentData(sdata.id);
                }} >Delete</Button>
                <Button color="primary">Update</Button>
            </Container>
        </CardBody>
    </Card>
);
}

export default StudentData;