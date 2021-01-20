"use strict";

const Router = ReactRouterDOM.BrowserRouter;
const Route =  ReactRouterDOM.Route;
const Link =  ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;


  function App() {
    return (
      <Router>
        <nav>
          <ul>
            {/* <li>
                <Link to="/"> Home </Link>
            </li> */}
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