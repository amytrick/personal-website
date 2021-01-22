"use strict";

function App() {
    return (
      <Router>
        <nav>
          {/* <ul> */}
            <p>
                <Link to="/about"> About </Link>
            </p>
            <p>
                <Link to="/works"> Works </Link>
            </p>
            <p>
                <Link to="/contact"> Contact </Link>
            </p>
          {/* </ul> */}
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