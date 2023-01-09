import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Menu=()=>{
    return(
        <div style={{ paddingTop: 73 }}>
            <Container >
            <ListGroup defaultActiveKey="/" className="my-4">
            <Link className="list-group-item list-group-action" action to="/"> 
                    Home
                </Link>
                <Link className="list-group-item list-group-action" to="/view-student">
                    View Students
                </Link>
                <Link className="list-group-item list-group-action" to="/add-student">
                    Add Students
                </Link>
            </ListGroup>
            </Container>
        </div>
    );
}

export default Menu;