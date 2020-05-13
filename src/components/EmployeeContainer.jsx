import React, { Component } from 'react';
import API from "../utils/API";
import UserDetail from "./userDetails"
import Container from "./Container"
import Row from "./Row"
import Col from "./Col"
import Card from  "./Card"

class Employees extends Component {
    state = { 
    result: []

     }

     componentDidMount() {
        this.getUserInfo();
        
        
      }

     getUserInfo  = query => {
        API.getUsers(query)
          .then(res => this.setState({ result: res.data.results}))
        // .then(res => console.log(res.data.results))
        
          .catch(err => console.log(err));
          
      };
       
     
      

    render() { 
    return ( <Container>
        <Row>
          <Col size="md-6">
            <Card heading={"Employee"}>              
            <UserDetail gender= {this.state.result.map((employee) => <li>{employee}</li>)} />
            </Card>
          </Col>
          <Col size="md-6">
            <Card heading={"Employee"}>
              <h4>Column 6</h4>
            </Card>
          </Col>
          
        </Row>
        <Row>
          <Col size="md-6">
            <Card heading={"Employee"}>
              <h4>Column 6</h4>
            </Card>
          </Col>
          <Col size="md-6">
            <Card heading={"Employee"}>
              <h4>Column 6</h4>
            </Card>
          </Col>
          
        </Row>
      </Container> );
    }
}
 

export default Employees;