import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Route  from 'react-router-dom/Route';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import Users from './components/Users';
import User from './components/User';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact strict component={Home}/>
          <Route path="/users" exact strict component={Users}/>
          <Route path="/users/:id" exact strict component={User}/>
          <Route path="/users/:id/edit" exact strict component={EditUser}/>
          <Route path="/add" exact strict component={AddUser}/>
        </div>
      </Router>
    );
  }
}

export default App;
