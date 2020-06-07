import './App.css';
import addVisitor from './components/add-visitor';
//import EditTodo from './components/edit-todo.component';
//import TodosList from './components/todos-list.component';
import logo from './vs.jpg';

import React, { Component, version } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/' className='navbar-brand'>
              Visitor management system
            </Link>
            <div className='collpase navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    Visitors
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Add visitor
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />

          <Route path='/create' component={addVisitor} />
        </div>
      </Router>
    );
  }
}
export default App;
