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
    filteredResults: [],
  };

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = (query) => {
    API.getUsers(query)
      .then((res) =>
        this.setState({
          result: res.data.results,
          filteredResults: res.data.results,
        })
      )
      // .then(res => console.log(res.data.results))

      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const filteredResults = this.state.result.filter((result) => {
      return result.name.first.toLowerCase().includes(value.toLowerCase());
    });
    console.log(this.state.result);
    this.setState({
      [name]: value,
      filteredResults,
    });
  };

  renderResults = () => {
    if (this.state.result.length < 5) {
      return this.state.result;
    }
    return;
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getUserInfo(this.state.search);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card heading={"Employees"}>
              <ResultList result={this.state.result} />
            </Card>
          </Col>
          <Col size="md-4">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Employees;
