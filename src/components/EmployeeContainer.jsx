import React, { Component } from "react";
import API from "../utils/API";

import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./searchForm";
import ResultList from "./ResultList";

class Employees extends Component {
  state = {
    firstName: "",
    result: [],
    filteredResults: []
  };

  componentDidMount() {
    this.getUserInfo();
    
  }

  getUserInfo = (query) => {
    API.getUsers(query)
      .then((res) => this.setState({ result: res.data.results, filteredResults: res.data.results }))
      // .then(res => console.log(res.data.results))

      .catch((err) => console.log(err));
     
  };
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const filteredResults = this.state.result.filter(result => {
        return result.name.first.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
        [name]: value,
        filteredResults
    });
};


  

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleSelectChange = (event) => {
    const value = event.target.value;
    let sortedResults = [];

    if (value === 'ascending') {
        sortedResults = [...this.state.filteredResults].sort((a, b) => a.dob.date.slice(5,7) - b.dob.date.slice(5,7))
        
    } else {
        sortedResults = [...this.state.filteredResults].sort((a, b) => b.dob.date.slice(5,7) - a.dob.date.slice(5,7))
    }
    this.setState({
        filteredResults: sortedResults
    })
}
  render() {
    return (
      <Container>
        
        <Row>
          <Col size="md-8">
            <Card heading={"Employees"}>
              <ResultList result={this.state.result}  />
            </Card>
          </Col>
          <Col size="md-4">
            <SearchForm 
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleSelectChange={this.handleSelectChange}   />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Employees;
