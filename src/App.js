// Importing Modules
import React, { Component } from 'react';

// Importing React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing Components
import Header from './components/layout/Header';


import './App.css';
import TodoApp from './pages/Todos';
import About from './pages/About';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <br />
            <Switch>
            {/* <Route exact path="/" render={props => (
              <TodoApp />
            )} /> */}
            <Route exact path="/" component={TodoApp} />
            <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;