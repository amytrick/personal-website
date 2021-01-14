"use strict";

function Hello() {
    return (
      <ul>
        <h1> Hi there! </h1>
        <p>Hi World!</p>
        <p> Hello! </p>
      </ul>
    );
  }
  
  ReactDOM.render(
    <Hello />,
    document.querySelector('#root')
  );