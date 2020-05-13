import React, { Component } from 'react';
import API from "../utils/API";
import UserDetail from "./userDetails"
import Container from "./Container"
import Row from "./Row"
import Col from "./Col"
import Card from  "./Card"

class Employees extends Component {
    state = { 
    gender: 'male'

     }

     componentDidMount() {
        this.getUserInfo();
        console.log(this.state.result)
        
      }

     getUserInfo  = query => {
        API.getUsers(query)
          .then(res => this.setState({ result: res.data.results}))
          .catch(err => console.log(err));
          
      };
      checkResults = () => {
          console.log(this.state.result);
      }

      

    render() { 
    return ( <UserDetail
        gender={this.state.gender}
       
        
      /> );
    }
}
 

export default Employees;