"use strict";

const Router = ReactRouterDOM.BrowserRouter;
const Route =  ReactRouterDOM.Route;
const Link =  ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Hello() {
    return (
      <ul>
        <h1> Hi there! </h1>
        <p>Hi World!</p>
        <p> Hello! </p>
      </ul>
    );
  }
  
  // ReactDOM.render(
  //   <Hello />,
  //   document.querySelector('#root')
  // );

  function App() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/about"> About </Link>
            </li>
            <li>
                <Link to="/works"> Works </Link>
            </li>
            <li>
                <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Hello />
            </Route>
          </Switch>
        </div>
      </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));