import React, { Component } from "react";
import UserList from "./components/user-list";

import Input from "./components/input";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    searchField: "",
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(response =>
      response.json().then(responsedUsers =>
        this.setState({
          users: responsedUsers,
        }),
      ),
    );
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const { users, searchField } = this.state;

    const filteredUser = users.filter(
      user =>
        user.name.toLowerCase().includes(searchField.toLowerCase()) ||
        user.email.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
      <div className="App">
        <h1>Mister Mosnters</h1>
        <Input placeholder="Search Users" handleChange={this.handleChange} />
        <UserList users={filteredUser} />
      </div>
    );
  }
}

export default App;
