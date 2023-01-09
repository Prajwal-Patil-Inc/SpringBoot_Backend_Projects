import React, { useEffect, useState } from "react";
import StudentData from "./StudentData";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Card, CardBody } from 'reactstrap';

const AllStudents = () => {

  useEffect(()=>{
    document.title="All Students";
  },[]);


  //fun to call server
  const getAllStudentDatafromServer=()=>{
    axios.get(`${base_url}/my`).then(
      (response)=>{
        //console.log(response);
        console.log(response.data);
        toast.success("Data loaded successfully");
        setData(response.data);
      },
      (error)=>{
        console.log(error);
        toast.error("Something went wrong");
      }
    )
  }

useEffect(()=>{
  getAllStudentDatafromServer();
},[])

  const [sdata, setData] = useState([]);

const updateStudents=(id)=>{
  setData(sdata.filter((c)=>c.id!=id));
}

  return (
    <Card color="light" className="text-center my-4" style={{ height: "100%" }}>
    <CardBody >
    <div>
      <h1 className="text-center">All Students</h1>
      <p>List of all Students are as follows</p>

      {sdata.length > 0
        ? sdata.map((item) => <StudentData key={item.id} sdata={item} update={updateStudents} />)
        : "No Student data available"}
    </div>
    </CardBody>
    </Card>
  );
};

export default AllStudents;
